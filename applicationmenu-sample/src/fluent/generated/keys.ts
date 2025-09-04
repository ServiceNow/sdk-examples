import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '3cc32e7d60bd4bfd85146b9fd627441e'
                    }
                    'Menu 2': {
                        table: 'sys_app_application'
                        id: '06aec691d8c24d79a1ce34b4354b9597'
                    }
                    'My App Menu': {
                        table: 'sys_app_application'
                        id: '654abdb1f8dc4537989b2ed8f79105f9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'dd94ffc8ba394a62be80a657c5ba993a'
                    }
                    sys_app_category_my_app: {
                        table: 'sys_app_category'
                        id: '1ac96ab31c1145be9ba0926e0fd53000'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role'
                        id: 'eb58f789b63f479eb363b79cc45f0ab9'
                        key: {
                            name: 'x_appmenu.activity_admin'
                        }
                    },
                ]
            }
        }
    }
}
