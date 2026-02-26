import { action, Flow, wfa, trigger } from '@servicenow/sdk/automation'

export const emailIncidentTaskFlow = Flow(
    {
        $id: Now.ID['email_incident_task_flow'],
        name: 'Email Incident/Task Creation Flow',
        description: 'Creates incidents or tasks based on email content with "raise incident or task" in subject',
    },
    wfa.trigger(
        trigger.application.inboundEmail,
        { $id: Now.ID['inbound_email_trigger'] },
        {
            email_conditions: 'subjectLIKEraise incident or task',
            target_table: 'incident',
        }
    ),
    (params) => {
        wfa.action(
            action.core.log,
            { $id: Now.ID['log_email_received'] },
            {
                log_level: 'info',
                log_message: `Email received from: ${wfa.dataPill(params.trigger.from_address, 'string')}, Subject: ${wfa.dataPill(params.trigger.subject, 'string')}`,
            }
        )

        const sender = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_sender'] },
            {
                table: 'sys_user',
                conditions: `email=${wfa.dataPill(params.trigger.from_address, 'string')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        // Internal P1 path — two tasks
        wfa.flowLogic.if(
            {
                $id: Now.ID['check_internal_p1'],
                condition: `${wfa.dataPill(sender.Record.email, 'string')}LIKEservicenow^${wfa.dataPill(params.trigger.subject, 'string')}LIKEP1`,
                annotation: 'Internal sender with P1 subject',
            },
            () => {
                const senderManager = wfa.action(
                    action.core.lookUpRecord,
                    { $id: Now.ID['lookup_sender_manager'] },
                    {
                        table: 'sys_user',
                        conditions: `sys_id=${wfa.dataPill(sender.Record.manager, 'reference')}`,
                        sort_type: 'sort_asc',
                        if_multiple_records_are_found_action: 'use_first_record',
                    }
                )

                wfa.action(
                    action.core.createTask,
                    { $id: Now.ID['task_for_manager'] },
                    {
                        task_table: 'incident',
                        field_values: TemplateValue({
                            priority: 1,
                            assigned_to: wfa.dataPill(senderManager.Record.sys_id, 'reference'),
                            short_description: wfa.dataPill(params.trigger.inbound_email.body, 'reference'),
                            urgency: 1,
                            impact: 1,
                        }),
                    }
                )

                wfa.action(
                    action.core.createTask,
                    { $id: Now.ID['task_for_sender'] },
                    {
                        task_table: 'incident',
                        field_values: TemplateValue({
                            priority: 1,
                            assigned_to: wfa.dataPill(sender.Record.sys_id, 'reference'),
                            short_description: wfa.dataPill(params.trigger.subject, 'string'),
                            urgency: 1,
                            impact: 1,
                        }),
                    }
                )
            }
        )

        // External / non-P1 path — P3 incident + copy attachments
        wfa.flowLogic.else(
            { $id: Now.ID['create_p3_incident_branch'] },
            () => {
                const p3Incident = wfa.action(
                    action.core.createRecord,
                    { $id: Now.ID['create_p3_incident'] },
                    {
                        table_name: 'incident',
                        values: TemplateValue({
                            priority: 4,
                            short_description: wfa.dataPill(params.trigger.subject, 'string'),
                            description: `From: ${wfa.dataPill(params.trigger.from_address, 'string')}\n\n${wfa.dataPill(params.trigger.inbound_email.body, 'reference')}`,
                            contact_type: 'email',
                            caller_id: wfa.dataPill(sender.Record.sys_id, 'reference'),
                        }),
                    }
                )

                const attachments = wfa.action(
                    action.core.getAttachmentsOnRecord,
                    { $id: Now.ID['get_email_attachments'] },
                    { source_record: wfa.dataPill(params.trigger.inbound_email.sys_id, 'reference') }
                )

                wfa.flowLogic.forEach(
                    wfa.dataPill(attachments.parameter, 'records'),
                    { $id: Now.ID['copy_attachments_loop'] },
                    () => {
                        wfa.action(
                            action.core.copyAttachment,
                            { $id: Now.ID['copy_attachment'] },
                            {
                                target_record: wfa.dataPill(p3Incident.record, 'reference'),
                                attachment_record: wfa.dataPill(attachments.parameter, 'records'),
                                table: 'incident',
                            }
                        )
                    }
                )

                wfa.action(
                    action.core.sendEmail,
                    { $id: Now.ID['confirm_p3_email'] },
                    {
                        table_name: 'incident',
                        ah_to: wfa.dataPill(params.trigger.from_address, 'string'),
                        ah_subject: `Incident Created: ${wfa.dataPill(params.trigger.subject, 'string')}`,
                        ah_body: `Your request has been received and a P3 incident has been created. Our team will be in touch shortly.`,
                        record: wfa.dataPill(p3Incident.record, 'reference'),
                    }
                )
            }
        )
    }
)
