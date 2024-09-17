import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'restapi-modules': {
                        table: 'sys_ws_definition'
                        id: '46d3ca2a8ce64fcfbca772d3f1c0f549'
                    }
                    'restapi-modules-get': {
                        table: 'sys_ws_operation'
                        id: '10c337ad1747470a9a60df0a172f5e72'
                    }
                }
            }
        }
    }
}
