import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '08258aed792c4aff85f6e57198fbd406'
                    }
                    c086924affd4b210fd87ffffffffff66: {
                        table: 'sp_container'
                        id: 'c086924affd4b210fd87ffffffffff66'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '08833d18db5244258499c6630ce2adb2'
                    }
                    'sample-widget': {
                        table: 'sp_widget'
                        id: '58ddf4df40894f298a720955cc549b03'
                    }
                }
                composite: [
                    {
                        table: 'm2m_sp_widget_dependency'
                        id: '0f7b02ceffd0b210fd87ffffffffffab'
                        key: {
                            sp_widget: '58ddf4df40894f298a720955cc549b03'
                            sp_dependency: 'a7a8754347011200ba13a5554ee4905c'
                        }
                    },
                ]
            }
        }
    }
}
