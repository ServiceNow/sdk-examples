import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '5ab9b09f9d3c4da3a155e87f558beebd'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '730a40fc55084eadb222f5bce6c62413'
                    }
                    sample1: {
                        table: 'sys_script_client'
                        id: 'e544396779684144a0461af8ef82e732'
                    }
                }
            }
        }
    }
}
