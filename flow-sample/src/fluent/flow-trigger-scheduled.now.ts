import { action, Flow, wfa, trigger } from '@servicenow/sdk/automation'

// ── trigger.scheduled.daily ───────────────────────────────────────────────────

export const networkIncidentEscalationFlow = Flow(
    {
        $id: Now.ID['network_incident_escalation_flow'],
        name: 'Network Incident Escalation Flow',
        description: 'Processes overdue Network incidents by logging, notifying owners, and posting to Slack',
    },
    wfa.trigger(
        trigger.scheduled.daily,
        { $id: Now.ID['daily_escalation_check_trigger'] },
        {
            time: Time({ hours: 9, minutes: 0, seconds: 0 }),
        }
    ),
    (_params) => {
        const overdueIncidents = wfa.action(
            action.core.lookUpRecords,
            { $id: Now.ID['lookup_overdue_network_incidents'] },
            {
                table: 'incident',
                conditions: 'active=true^category=network^escalation!=0^due_dateLT@javascript:gs.nowDateTime()',
                max_results: 1000,
                sort_column: 'due_date',
                sort_type: 'sort_asc',
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['check_overdue_incidents_exist'],
                condition: `${wfa.dataPill(overdueIncidents.Count, 'integer')}>0`,
                annotation: 'Check if overdue incidents exist',
            },
            () => {
                wfa.flowLogic.forEach(
                    wfa.dataPill(overdueIncidents.Records, 'array.string'),
                    { $id: Now.ID['foreach_overdue_incident'] },
                    () => {
                        const incidentDetails = wfa.action(
                            action.core.lookUpRecord,
                            { $id: Now.ID['lookup_incident_details'] },
                            {
                                table: 'incident',
                                conditions: `sys_id=${wfa.dataPill(overdueIncidents.Records, 'array.string')}`,
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                            }
                        )

                        wfa.action(
                            action.core.sendNotification,
                            { $id: Now.ID['send_owner_notification'] },
                            {
                                table_name: 'incident',
                                record: wfa.dataPill(incidentDetails.Record.sys_id, 'reference'),
                                notification: 'overdue_network_incident_owner_notification',
                            }
                        )

                        wfa.action(
                            action.core.updateRecord,
                            { $id: Now.ID['update_incident_work_notes'] },
                            {
                                table_name: 'incident',
                                record: wfa.dataPill(incidentDetails.Record.sys_id, 'reference'),
                                values: TemplateValue({
                                    work_notes: `Escalation notification sent. Due Date: ${wfa.dataPill(incidentDetails.Record.due_date, 'string')}`,
                                }),
                            }
                        )
                    }
                )
            }
        )

        wfa.flowLogic.else({ $id: Now.ID['handle_no_overdue_incidents'] }, () => {
            wfa.action(
                action.core.log,
                { $id: Now.ID['log_no_overdue_incidents'] },
                {
                    log_level: 'info',
                    log_message: 'No overdue Network incidents found.',
                }
            )
        })
    }
)

// ── trigger.scheduled.weekly ──────────────────────────────────────────────────

export const weeklyCABSummaryFlow = Flow(
    {
        $id: Now.ID['weekly_cab_summary_flow'],
        name: 'Weekly CAB Summary Flow',
        description: 'Sends a weekly summary of pending change requests to the CAB group every Friday',
    },
    wfa.trigger(
        trigger.scheduled.weekly,
        { $id: Now.ID['weekly_cab_trigger'] },
        {
            day_of_week: 'friday',
            time: Time({ hours: 16, minutes: 0, seconds: 0 }),
        }
    ),
    (params) => {
        const pendingChanges = wfa.action(
            action.core.lookUpRecords,
            { $id: Now.ID['lookup_pending_changes'] },
            {
                table: 'change_request',
                conditions: 'active=true^stateIN-5,-4,-3,-2,-1,0,1',
                max_results: 200,
                sort_column: 'start_date',
                sort_type: 'sort_asc',
            }
        )

        const summaryTask = wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_cab_summary_task'] },
            {
                table_name: 'task',
                values: TemplateValue({
                    short_description: `Weekly CAB Summary — ${wfa.dataPill(pendingChanges.Count, 'integer')} pending changes`,
                    description: `Weekly change advisory board summary generated at ${wfa.dataPill(params.trigger.run_start_date_time, 'glide_date_time')}.`,
                    priority: 3,
                    state: 1,
                    assignment_group: 'CAB',
                }),
            }
        )

        wfa.action(
            action.core.sendNotification,
            { $id: Now.ID['send_cab_summary'] },
            {
                record: wfa.dataPill(summaryTask.record, 'reference'),
                notification: 'weekly_cab_summary_notification',
            }
        )
    }
)

// ── trigger.scheduled.monthly ─────────────────────────────────────────────────

export const monthlyIncidentReportFlow = Flow(
    {
        $id: Now.ID['monthly_incident_report_flow'],
        name: 'Monthly Incident Report Flow',
        description: 'Generates monthly summary reports for all resolved incidents from the previous month',
    },
    wfa.trigger(
        trigger.scheduled.monthly,
        { $id: Now.ID['monthly_report_trigger'] },
        {
            day_of_month: 1,
            time: Time({ hours: 8, minutes: 0, seconds: 0 }),
        }
    ),
    (params) => {
        const resolvedIncidents = wfa.action(
            action.core.lookUpRecords,
            { $id: Now.ID['lookup_resolved_incidents'] },
            {
                table: 'incident',
                conditions: 'state=6^resolved_atRELATIVEGE@month@ago@1^resolved_atRELATIVELT@month@ago@0',
                max_results: 1000,
                sort_column: 'resolved_at',
                sort_type: 'sort_desc',
            }
        )

        const reportRecord = wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_report_record'] },
            {
                table_name: 'task',
                values: TemplateValue({
                    short_description: `Monthly Incident Report - Resolved Incidents`,
                    description: `Total resolved incidents last month: ${wfa.dataPill(resolvedIncidents.Count, 'integer')}. Generated at: ${wfa.dataPill(params.trigger.run_start_date_time, 'glide_date_time')}.`,
                    state: 1,
                    priority: 4,
                }),
            }
        )

        wfa.action(
            action.core.sendNotification,
            { $id: Now.ID['send_report_notification'] },
            {
                record: wfa.dataPill(reportRecord.record, 'reference'),
                notification: 'monthly_incident_report_notification',
            }
        )
    }
)

// ── trigger.scheduled.repeat ──────────────────────────────────────────────────

export const pendingApprovalReminderFlow = Flow(
    {
        $id: Now.ID['pending_approval_reminder_flow'],
        name: 'Pending Approval Reminder Flow',
        description: 'Sends reminders every 4 hours for change requests awaiting approval',
    },
    wfa.trigger(
        trigger.scheduled.repeat,
        { $id: Now.ID['approval_reminder_trigger'] },
        {
            repeat: Duration({ hours: 4 }),
        }
    ),
    (_params) => {
        const pendingApprovals = wfa.action(
            action.core.lookUpRecords,
            { $id: Now.ID['lookup_pending_approvals'] },
            {
                table: 'sysapproval_approver',
                conditions: 'state=requested^source_tableINchange_request',
                max_results: 500,
                sort_column: 'sys_created_on',
                sort_type: 'sort_asc',
            }
        )

        wfa.flowLogic.forEach(
            wfa.dataPill(pendingApprovals.Records, 'array.string'),
            { $id: Now.ID['foreach_pending_approval'] },
            () => {
                const approval = wfa.action(
                    action.core.lookUpRecord,
                    { $id: Now.ID['lookup_approval_detail'] },
                    {
                        table: 'sysapproval_approver',
                        conditions: `sys_id=${wfa.dataPill(pendingApprovals.Records, 'array.string')}`,
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                    }
                )

                wfa.action(
                    action.core.sendNotification,
                    { $id: Now.ID['send_approval_reminder'] },
                    {
                        table_name: 'sysapproval_approver',
                        record: wfa.dataPill(approval.Record.sys_id, 'reference'),
                        notification: 'pending_approval_reminder_notification',
                    }
                )
            }
        )
    }
)

// ── trigger.scheduled.runOnce ─────────────────────────────────────────────────

export const legacyDataMigrationFlow = Flow(
    {
        $id: Now.ID['legacy_data_migration_flow'],
        name: 'Legacy Data Migration Flow',
        description: 'One-time migration of legacy incident records to updated classification schema',
    },
    wfa.trigger(
        trigger.scheduled.runOnce,
        { $id: Now.ID['legacy_migration_trigger'] },
        {
            date_time: '2025-01-15 02:00:00',
        }
    ),
    (params) => {
        const legacyIncidents = wfa.action(
            action.core.lookUpRecords,
            { $id: Now.ID['lookup_legacy_incidents'] },
            {
                table: 'incident',
                conditions: 'category=legacy^migrated=false',
                max_results: 5000,
                sort_column: 'sys_created_on',
                sort_type: 'sort_asc',
            }
        )

        wfa.flowLogic.forEach(
            wfa.dataPill(legacyIncidents.Records, 'array.string'),
            { $id: Now.ID['foreach_legacy_incident'] },
            () => {
                const incident = wfa.action(
                    action.core.lookUpRecord,
                    { $id: Now.ID['lookup_legacy_incident_detail'] },
                    {
                        table: 'incident',
                        conditions: `sys_id=${wfa.dataPill(legacyIncidents.Records, 'array.string')}`,
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                    }
                )

                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['migrate_incident'] },
                    {
                        table_name: 'incident',
                        record: wfa.dataPill(incident.Record.sys_id, 'reference'),
                        values: TemplateValue({
                            category: 'network',
                            migrated: 'true',
                            work_notes: `Migrated from legacy classification on ${wfa.dataPill(params.trigger.run_start_date_time, 'glide_date_time')}.`,
                        }),
                    }
                )
            }
        )

        wfa.action(
            action.core.log,
            { $id: Now.ID['log_migration_complete'] },
            {
                log_level: 'info',
                log_message: `Legacy data migration complete. ${wfa.dataPill(legacyIncidents.Count, 'integer')} records migrated.`,
            }
        )
    }
)
