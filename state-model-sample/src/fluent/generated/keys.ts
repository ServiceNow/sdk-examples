import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '68b6bbf1c1d2408c962fa30ee054abe8'
                    }
                    emergency_change_assess: {
                        table: 'sttrm_state'
                        id: '3ece710fd02a41d680813501045a5715'
                    }
                    emergency_change_assess_to_authorize: {
                        table: 'sttrm_state_transition'
                        id: '33119b96336241d685131f8fa21d58a5'
                    }
                    emergency_change_authorize: {
                        table: 'sttrm_state'
                        id: 'a3355681cb304956aebeb78bdfb2e5f4'
                    }
                    emergency_change_authorize_to_implement: {
                        table: 'sttrm_state_transition'
                        id: '65dd6cefcbaf485d89eba474735a213e'
                    }
                    emergency_change_closed: {
                        table: 'sttrm_state'
                        id: '05bc11f718ed481c99130cf1c64e2c91'
                    }
                    emergency_change_cond_approved: {
                        table: 'sttrm_transition_condition'
                        id: 'ac7fefd3cda3415ea03fa68fc0fedf85'
                    }
                    emergency_change_cond_no_open_tasks: {
                        table: 'sttrm_transition_condition'
                        id: '2ed19c499e2744e79f250879959d3fb9'
                    }
                    emergency_change_implement: {
                        table: 'sttrm_state'
                        id: '01b93f543222463cbf6a6aeec0f5b74c'
                    }
                    emergency_change_implement_to_review: {
                        table: 'sttrm_state_transition'
                        id: '95d9f4f2c749404a97b7676bf96dae8b'
                    }
                    emergency_change_model: {
                        table: 'chg_model'
                        id: 'b14481ee93f24760ac993657a946ec51'
                    }
                    emergency_change_new: {
                        table: 'sttrm_state'
                        id: '68890c2f90fe470198152080a6098075'
                    }
                    emergency_change_new_to_assess: {
                        table: 'sttrm_state_transition'
                        id: '65e608efdc2e4b85a79ad66be8fcee9f'
                    }
                    emergency_change_review: {
                        table: 'sttrm_state'
                        id: 'ba6720ed534d4e4199e9e7c36747fd54'
                    }
                    emergency_change_review_to_closed: {
                        table: 'sttrm_state_transition'
                        id: '069ae99eeec8473286de4f17e1c22ac5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ce7677c6ddf64a508e1039a0dd851c0e'
                    }
                    request_emergency_change_authorization_ask: {
                        table: 'sys_hub_action_instance_v2'
                        id: '76e29bd8565647478c20a6bd421c0026'
                    }
                    request_emergency_change_authorization_flow: {
                        table: 'sys_hub_flow'
                        id: 'd585ce2d4e1946d0ba03b97d405ac694'
                    }
                    request_emergency_change_authorization_if_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'a3aee9352035452295b1913b03d9beb6'
                    }
                    request_emergency_change_authorization_log: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0e93033e227f4be0b39148d5777c7788'
                    }
                    request_emergency_change_authorization_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '4f300b4c694b4c26b5c13a564859435a'
                    }
                }
            }
        }
    }
}
