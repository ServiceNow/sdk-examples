import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'a8266aac83af4f5eb2fd74ddbafe68db'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'eccae5500d844411a0f4f4dabe1b39bd'
                    }
                    'ui-page-sample': {
                        table: 'sys_ui_page'
                        id: '333074dd77e843cfa69be69a6c6b1538'
                    }
                }
            }
        }
    }
}
