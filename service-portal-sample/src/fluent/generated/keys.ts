import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '24b69e8affd4b210fd87ffffffffff24': {
                        table: 'sp_row'
                        id: '24b69e8affd4b210fd87ffffffffff24'
                    }
                    '60b69e8affd4b210fd87ffffffffff27': {
                        table: 'sp_column'
                        id: '60b69e8affd4b210fd87ffffffffff27'
                    }
                    '6d109a82ff54b210fd87ffffffffff8e': {
                        table: 'sys_scope_privilege'
                        id: '6d109a82ff54b210fd87ffffffffff8e'
                    }
                    '7ab692caffd4b210fd87ffffffffffeb': {
                        table: 'sp_instance'
                        id: '7ab692caffd4b210fd87ffffffffffeb'
                    }
                    '8186164affd4b210fd87ffffffffff11': {
                        table: 'sp_container'
                        id: '8186164affd4b210fd87ffffffffff11'
                    }
                    '8e66560affd4b210fd87ffffffffffe6': {
                        table: 'sp_page'
                        id: '8e66560affd4b210fd87ffffffffffe6'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '08258aed792c4aff85f6e57198fbd406'
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
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '6d97573eff683210fd87ffffffffff0d'
                        key: {
                            sp_widget: '58ddf4df40894f298a720955cc549b03'
                            sp_angular_provider: '1d2b40e07323201081d3738234f6a714'
                        }
                    },
                ]
            }
        }
    }
}
