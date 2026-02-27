import { action, Flow, wfa, trigger } from '@servicenow/sdk/automation'

export const remoteUserQueryFlow = Flow(
    {
        $id: Now.ID['remote_user_query_flow'],
        name: 'Remote User Query Enrichment Flow',
        description: 'Enriches user records returned to remote systems with active incident counts',
    },
    wfa.trigger(trigger.application.remoteTableQuery, { $id: Now.ID['remote_query_trigger'] }, {}),
    (params) => {
        wfa.action(
            action.core.log,
            { $id: Now.ID['log_remote_query'] },
            {
                log_level: 'info',
                log_message: `Remote query received - Query ID: ${wfa.dataPill(params.trigger.query_id, 'string')}, Parameters: ${wfa.dataPill(params.trigger.query_parameters, 'string')}, Table: ${wfa.dataPill(params.trigger.table_name, 'string')}}`,
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['check_user_table'],
                condition: `${wfa.dataPill(params.trigger.table_name, 'table_name')}=sys_user`,
                annotation: 'Query is for sys_user table',
            },
            () => {
                const activeUsers = wfa.action(
                    action.core.lookUpRecords,
                    { $id: Now.ID['lookup_active_users'] },
                    {
                        table: 'sys_user',
                        conditions: 'active=true^departmentISNOTEMPTY',
                        max_results: 500,
                        sort_column: 'name',
                        sort_type: 'sort_asc',
                    }
                )

                wfa.flowLogic.forEach(
                    wfa.dataPill(activeUsers.Records, 'records'),
                    { $id: Now.ID['foreach_users'] },
                    () => {
                        const userIncidents = wfa.action(
                            action.core.lookUpRecords,
                            { $id: Now.ID['lookup_user_incidents'] },
                            {
                                table: 'incident',
                                conditions: `assigned_to=${wfa.dataPill(activeUsers.Records, 'records')}^active=true`,
                                max_results: 100,
                                sort_column: 'priority',
                                sort_type: 'sort_asc',
                            }
                        )

                        wfa.action(
                            action.core.log,
                            { $id: Now.ID['log_user_incident_count'] },
                            {
                                log_level: 'info',
                                log_message: `User enrichment complete — incidents: ${wfa.dataPill(userIncidents.Records, 'records')}`,
                            }
                        )
                    }
                )
            }
        )

        wfa.flowLogic.else({ $id: Now.ID['unhandled_table_branch'] }, () => {
            wfa.action(
                action.core.log,
                { $id: Now.ID['log_unhandled_table'] },
                {
                    log_level: 'warn',
                    log_message: `Remote query for unhandled table: ${wfa.dataPill(params.trigger.table_name, 'table_name')} — no enrichment applied.`,
                }
            )
        })
    }
)
