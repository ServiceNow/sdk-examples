import { action, Flow, wfa, trigger } from '@servicenow/sdk/automation'

export const slaTaskEscalationFlow = Flow(
    {
        $id: Now.ID['sla_task_escalation_flow'],
        name: 'SLA Task Escalation Flow',
        description: 'Escalates tasks at 75% and 90% SLA milestones and confirms resolution',
    },
    wfa.trigger(
        trigger.application.slaTask,
        { $id: Now.ID['sla_task_trigger'] },
        {}
    ),
    (params) => {
        // ── 75% milestone ────────────────────────────────────────────────────────
        wfa.action(
            action.core.slaPercentageTimer,
            { $id: Now.ID['wait_75_percent'], annotation: 'Pause until 75% of SLA time elapsed' },
            { percentage: 75 }
        )

        const slat75 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_sla_75'] },
            {
                table: 'task_sla',
                conditions: `sys_id=${wfa.dataPill(params.trigger.task_sla_record, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        const task75 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_task_75'] },
            {
                table: 'task',
                conditions: `sys_id=${wfa.dataPill(slat75.Record.task, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['check_not_assigned_75'],
                condition: `${wfa.dataPill(task75.Record.assigned_to, 'reference')}=NULL`,
                annotation: 'Task is unassigned at 75%',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['worknote_unassigned_75'] },
                    {
                        table_name: 'task',
                        record: wfa.dataPill(task75.Record.sys_id, 'reference'),
                        values: TemplateValue({ work_notes: 'Warning: task is unassigned at 75% of SLA time.' }),
                    }
                )
            }
        )

        wfa.flowLogic.else(
            { $id: Now.ID['handle_assigned_75'] },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['worknote_assigned_75'] },
                    {
                        table_name: 'task',
                        record: wfa.dataPill(task75.Record.sys_id, 'reference'),
                        values: TemplateValue({ work_notes: 'SLA at 75% — manager notified.' }),
                    }
                )

                wfa.action(
                    action.core.sendNotification,
                    { $id: Now.ID['notify_manager_75'] },
                    {
                        table_name: 'task',
                        record: wfa.dataPill(task75.Record.sys_id, 'reference'),
                        notification: 'sla_escalation_level_1_notification',
                    }
                )
            }
        )

        // ── 90% milestone ────────────────────────────────────────────────────────
        wfa.action(
            action.core.slaPercentageTimer,
            { $id: Now.ID['wait_90_percent'], annotation: 'Pause until 90% of SLA time elapsed' },
            { percentage: 90 }
        )

        const slat90 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_sla_90'] },
            {
                table: 'task_sla',
                conditions: `sys_id=${wfa.dataPill(params.trigger.task_sla_record, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        const task90 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_task_90'] },
            {
                table: 'task',
                conditions: `sys_id=${wfa.dataPill(slat90.Record.task, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['check_resolved_90'],
                condition: `${wfa.dataPill(task90.Record.state, 'string')}=6`,
                annotation: 'Task already resolved at 90%',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['worknote_resolved_90'] },
                    {
                        table_name: 'task',
                        record: wfa.dataPill(task90.Record.sys_id, 'reference'),
                        values: TemplateValue({ work_notes: 'Task resolved before 90% SLA milestone — no escalation needed.' }),
                    }
                )
            }
        )

        wfa.flowLogic.else(
            { $id: Now.ID['handle_unresolved_90'] },
            () => {
                wfa.action(
                    action.core.sendNotification,
                    { $id: Now.ID['urgent_escalation_90'] },
                    {
                        table_name: 'task',
                        record: wfa.dataPill(task90.Record.sys_id, 'reference'),
                        notification: 'sla_escalation_urgent_notification',
                    }
                )

                wfa.action(
                    action.core.waitForCondition,
                    { $id: Now.ID['wait_for_resolution'] },
                    {
                        table_name: 'task',
                        record: wfa.dataPill(task90.Record.sys_id, 'reference'),
                        conditions: 'state=6',
                        timeout_duration: Duration({ days: 7 }),
                    }
                )

                wfa.action(
                    action.core.sendNotification,
                    { $id: Now.ID['confirm_resolution'] },
                    {
                        table_name: 'task',
                        record: wfa.dataPill(task90.Record.sys_id, 'reference'),
                        notification: 'sla_resolution_confirmation_notification',
                    }
                )
            }
        )
    }
)
