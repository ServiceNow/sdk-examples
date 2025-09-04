import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '37ed71ecae6647b5807b86537bf487e5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c5d900c644344c849495a43d75fbba30'
                    }
                }
            }
        }
    }
}
