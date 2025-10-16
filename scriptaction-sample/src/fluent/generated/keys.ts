import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'da67edc9785147a39e7618f421d93dd5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ccecaf4c65214391abdfc18a39e77bb7'
                    }
                    'sample-script-action': {
                        table: 'sysevent_script_action'
                        id: '6d9f1408b36841fd853efd4794284f9d'
                    }
                    src_server_action_js: {
                        table: 'sys_module'
                        id: 'd8b186396ede42a197b76bf12d056c1c'
                    }
                }
            }
        }
    }
}
