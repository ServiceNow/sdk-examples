import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'f6f9615c466c4139991dbb76dab86e87'
                    }
                    'my-script-include': {
                        table: 'sys_script_include'
                        id: '6422702fc5be45d089ee4f326248b386'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0ff7d440d6f74c7e8ecbb9ba00dd7afa'
                    }
                }
            }
        }
    }
}
