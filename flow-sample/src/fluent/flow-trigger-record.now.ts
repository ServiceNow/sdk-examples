import { action, Flow, wfa, trigger } from '@servicenow/sdk/automation'

// ── trigger.record.created ────────────────────────────────────────────────────

export const incidentSeverityAlertFlow = Flow(
    {
        $id: Now.ID['incident_severity_alert_flow'],
        name: 'Incident Severity Alert Flow',
        description: 'Alerts managers and team members based on incident severity for incidents with empty origin',
    },
    wfa.trigger(
        trigger.record.created,
        { $id: Now.ID['empty_origin_incident_trigger'] },
        {
            table: 'incident',
            condition: 'origin=NULL',
            run_flow_in: 'background',
            run_on_extended: 'false',
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            run_when_user_list: [],
        }
    ),
    (params) => {
        wfa.action(
            action.core.log,
            { $id: Now.ID['log_incident_short_description'] },
            {
                log_level: 'info',
                log_message: `Incident created: ${wfa.dataPill(params.trigger.current.short_description, 'string')}`,
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['check_severity_high'],
                condition: `${wfa.dataPill(params.trigger.current.severity, 'string')}=1`,
                annotation: 'High severity (1)',
            },
            () => {
                const assignmentGroup = wfa.action(
                    action.core.lookUpRecord,
                    { $id: Now.ID['lookup_assignment_group'] },
                    {
                        table: 'sys_user_group',
                        conditions: `sys_id=${wfa.dataPill(params.trigger.current.assignment_group, 'reference')}`,
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                    }
                )

                const manager = wfa.action(
                    action.core.lookUpRecord,
                    { $id: Now.ID['lookup_manager_details'] },
                    {
                        table: 'sys_user',
                        conditions: `sys_id=${wfa.dataPill(assignmentGroup.Record.manager, 'reference')}`,
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                    }
                )

                wfa.action(
                    action.core.sendNotification,
                    { $id: Now.ID['send_urgent_email_to_manager'] },
                    {
                        table_name: 'incident',
                        record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                        notification: 'high_severity_incident_manager_notification',
                    }
                )

                wfa.flowLogic.forEach(
                    wfa.dataPill(params.trigger.current.additional_assignee_list, 'array.string'),
                    { $id: Now.ID['foreach_additional_assignees_high'] },
                    () => {
                        const assignee = wfa.action(
                            action.core.lookUpRecord,
                            { $id: Now.ID['lookup_assignee_details_high'] },
                            {
                                table: 'sys_user',
                                conditions: `sys_id=${wfa.dataPill(params.trigger.current.additional_assignee_list, 'array.string')}`,
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                            }
                        )

                        wfa.action(
                            action.core.sendSms,
                            { $id: Now.ID['send_sms_to_assignee_high'] },
                            {
                                recipients: `${wfa.dataPill(assignee.Record.phone, 'string')}`,
                                message: `High severity incident: ${wfa.dataPill(params.trigger.current.short_description, 'string')}`,
                            }
                        )
                    }
                )

                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['update_work_notes_high'] },
                    {
                        table_name: 'incident',
                        record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                        values: TemplateValue({
                            work_notes: `Manager ${wfa.dataPill(manager.Record.name, 'string')} notified via email and team notified via SMS.`,
                        }),
                    }
                )
            }
        )

        wfa.flowLogic.elseIf(
            {
                $id: Now.ID['check_severity_medium'],
                condition: `${wfa.dataPill(params.trigger.current.severity, 'string')}=2`,
                annotation: 'Medium severity (2)',
            },
            () => {
                wfa.flowLogic.forEach(
                    wfa.dataPill(params.trigger.current.additional_assignee_list, 'array.string'),
                    { $id: Now.ID['foreach_additional_assignees_medium'] },
                    () => {
                        const assignee = wfa.action(
                            action.core.lookUpRecord,
                            { $id: Now.ID['lookup_assignee_details_medium'] },
                            {
                                table: 'sys_user',
                                conditions: `sys_id=${wfa.dataPill(params.trigger.current.additional_assignee_list, 'array.string')}`,
                                sort_type: 'sort_asc',
                                if_multiple_records_are_found_action: 'use_first_record',
                            }
                        )

                        wfa.action(
                            action.core.sendSms,
                            { $id: Now.ID['send_sms_to_assignee_medium'] },
                            {
                                recipients: `${wfa.dataPill(assignee.Record.phone, 'string')}`,
                                message: `Medium severity incident: ${wfa.dataPill(params.trigger.current.short_description, 'string')}`,
                            }
                        )
                    }
                )
            }
        )

        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['update_incident_to_in_progress'] },
            {
                table_name: 'incident',
                record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                values: TemplateValue({ state: '2' }),
            }
        )
    }
)

// ── trigger.record.updated ────────────────────────────────────────────────────

export const changeRequestApprovalNotificationFlow = Flow(
    {
        $id: Now.ID['change_request_approval_notification_flow'],
        name: 'Change Request Approval Notification Flow',
        description: 'Sends formatted notification to requester when change request is approved',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['change_request_approved_trigger'] },
        {
            table: 'change_request',
            condition: 'approval=approved',
            run_flow_in: 'background',
            trigger_strategy: 'unique_changes',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_on_extended: 'false',
            run_when_user_setting: 'any',
        }
    ),
    (params) => {
        const requester = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_requester_details'] },
            {
                table: 'sys_user',
                conditions: `sys_id=${wfa.dataPill(params.trigger.current.requested_by, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        wfa.action(
            action.core.sendEmail,
            { $id: Now.ID['send_approval_notification_email'] },
            {
                table_name: 'change_request',
                watermark_email: true,
                ah_subject: `Change Request ${wfa.dataPill(params.trigger.current.number, 'string')} - Approved`,
                ah_body: `Your change request has been approved.`,
                record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                ah_to: wfa.dataPill(requester.Record.email, 'string'),
            }
        )

        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['update_work_notes_notification_sent'] },
            {
                table_name: 'change_request',
                record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                values: TemplateValue({
                    work_notes: `Approval notification sent to ${wfa.dataPill(requester.Record.name, 'string')} (${wfa.dataPill(requester.Record.email, 'string')})`,
                }),
            }
        )
    }
)

// ── trigger.record.createdOrUpdated ──────────────────────────────────────────

export const changeRiskTaggingFlow = Flow(
    {
        $id: Now.ID['change_risk_tagging_flow'],
        name: 'Change Risk Tagging Flow',
        description: 'Tags change requests with high-risk label when created or updated with high impact',
    },
    wfa.trigger(
        trigger.record.createdOrUpdated,
        { $id: Now.ID['change_risk_trigger'] },
        {
            table: 'change_request',
            condition: 'active=true^impact=1',
            run_flow_in: 'background',
            run_on_extended: 'false',
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            run_when_user_list: [],
        }
    ),
    (params) => {
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['tag_high_risk'] },
            {
                table_name: 'change_request',
                record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                values: TemplateValue({
                    risk: 'high',
                    work_notes: 'Automatically tagged as high-risk due to high impact.',
                }),
            }
        )

        const cab = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_cab_group'] },
            {
                table: 'sys_user_group',
                conditions: 'name=CAB^active=true',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        wfa.action(
            action.core.sendNotification,
            { $id: Now.ID['notify_cab_high_risk'] },
            {
                table_name: 'change_request',
                record: wfa.dataPill(params.trigger.current.sys_id, 'reference'),
                notification: 'high_risk_change_cab_notification',
            }
        )

        wfa.action(
            action.core.log,
            { $id: Now.ID['log_risk_tagged'] },
            {
                log_level: 'warn',
                log_message: `Change ${wfa.dataPill(params.trigger.current.number, 'string')} tagged as high-risk. CAB group ${wfa.dataPill(cab.Record.name, 'string')} notified.`,
            }
        )
    }
)
