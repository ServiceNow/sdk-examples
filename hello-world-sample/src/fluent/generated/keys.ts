import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '34f5e36c08334be09a2e50e8119a6fcb'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3d378ede22984277a29a8593a21b661e'
                    }
                    x_helloworld_tableone_record1: {
                        table: 'x_helloworld_tableone'
                        id: 'bd8998c9466c4121b31f3d020dfbebb2'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0a7b61f736614d03916732d4fde2ecd7'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'string_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2562ae25a7524ed1a44ca6568cac7d83'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '28039b85f0214368b53a7cab39a92727'
                        key: {
                            name: 'x_helloworld_tableone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32f7184af5c2412ba1299a27b9ca6071'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'datetime_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57e7f23013424fafb1236b11c6906db2'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'integer_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f450f0a8a0941e0a61232bdbe37b22d'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'datetime_field'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cd0de00ede84f85b9da4346ee172bd5'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c282773896054aad850806c70e698e32'
                        key: {
                            name: 'x_helloworld_tableone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd394d902c057475584b163574be62e23'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'string_field'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebea014eb57344d1aabdd5bfa756c41e'
                        key: {
                            name: 'x_helloworld_tableone'
                            element: 'integer_field'
                        }
                    },
                ]
            }
        }
    }
}
