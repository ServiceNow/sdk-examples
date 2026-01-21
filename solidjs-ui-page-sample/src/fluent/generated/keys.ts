import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '2233f4433e684dc09c29678cdfdc6b94'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: 'ab8055895ecf4b9dbef9e9d6865b4bb1'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '28fcd69dd5f44ff4a5365be9d86f590a'
                    }
                    'x_solidjs_example/main': {
                        table: 'sys_ux_lib_asset'
                        id: '4b46985b614b42a18dc61a21b97b4608'
                        deleted: false
                    }
                    'x_solidjs_example/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'decacd03dd8346559cc7a01054aca662'
                        deleted: false
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0834472b7f6e4e3eb430d3c1178da6ff'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1327234a925148289c4e4a538ffc63ee'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3018b8a974ff4203bff67ad3afa9daf6'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '351d1c06dce44538a739fb165bc86e07'
                        key: {
                            category: 'x_solidjs_example_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '37777476c5b54a11b18fbcf9feaa915e'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3dbac9f27c234b789beadc29eaa08cd2'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '510b0cb67f7542c5944d4595dfd349cb'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '528b9385c16044a09a33cd99c67f5045'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a89d6924204483f8e1df4c327281d80'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c6ca73c28dd406f9baf86559d878960'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5faaf290ab294f7c8592718750b88fe9'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62beb119411246b482de315208d48909'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '675144a864144ec1ac9c5481bdd91fdf'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d18356686724d40ba074f3cb9bbd314'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6fe0a1ec8d9a4c1db67742c0f819539d'
                        key: {
                            name: 'x_solidjs_example_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '888b84ef20c54d769ea27e60b39c5627'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8aeb07a7ecde4fb2bcb67df8474feb9b'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e44313ae4d74be88b533d01f0aa9e2a'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9a9c6ec137604cc3a01e3cf9775638d8'
                        key: {
                            name: 'x_solidjs_example_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b960c6080f846be88e621cba90fb388'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c2b515af76a4f3080378e7fd9795ded'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2c5c573dafb4c278c135d36b47d3a91'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba3223fedc1d4ee2aa36d6472d5efb55'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c13e8175c5e842b497213fec4451288d'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c29853b0b7bd4aaa8994c5d57ea6ed5e'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbb7c7a72d7e4c24a112968ad49965d8'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e4d59e7fd59e41cc902c2d14cb81c01d'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9a490b58d6f4245b719a110e38168e1'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f33dff1e0d9c483abe1d3078fff20dd1'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd68f35da42f4d1cb2c4d80847922627'
                        key: {
                            name: 'x_solidjs_example_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                ]
            }
        }
    }
}
