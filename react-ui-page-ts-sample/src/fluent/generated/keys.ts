import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '83c60dc3515243d29960f4205f9f0a6a'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: '936ec46db9db4cde9e1bbbd81b64c222'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'b3cd92f96a634780a24133a839d0e042'
                    }
                    'sn_reactuisample/main': {
                        table: 'sys_ux_lib_asset'
                        id: '1f63f6f714b645948ece7612fc55b4b5'
                    }
                    'sn_reactuisample/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '60e743e652a1420093bb97f5091c0c57'
                    }
                    'x_reactuisample/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'ba0133407a5449618aeb3404ee8dd2ea'
                        deleted: true
                    }
                    'x_reactuisample/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '21991ac96def4cb6ad2f4da1c781b827'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0459b03bae1d40a69f258d4094288029'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a13c9565f844a5e8555c9dacfd72a14'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '106c6753bbf24d7688836e11d438070c'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ba2c0916a2e4a259d856d2500f47f3e'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '48b53e20a72c4448b390286e8f878653'
                        key: {
                            name: 'x_reactuisample_incident'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4dda2af925124d909a17b1c407dab5dc'
                        key: {
                            name: 'x_reactuisample_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e17a743a2614e0db4a2ffd540e154b2'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4eb61f3cef69496ab314d06453456dd8'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5545c72d1d564088bbddeafc0db71c47'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e3e689738784c7e9d331943a3324a95'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6066008835574baaa24fdd75918fa2c6'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6977bec3586f4630857ed95b57eedcbc'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d8f961cb99f4eb8ab28f7643171ba85'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8991deb700374fa899e08a8dcc3ffaaf'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '8a1e8536096b4717becc8194fb6da32a'
                        key: {
                            category: 'x_reactuisample_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8ca97920be8b45afa3702ab67dc769f4'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93c86331a48b4820a86ea447a0022b6c'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9aa94b3e5a07474c9ec5e01e7c1c3d9b'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9e5cebef5dd54f8b803ccc2146d48bee'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c1782c4f14744068bfb5498d0c540081'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c75c093c1cd94f91bd3fc0362dd8c352'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c80f33427ca742a7bdd5fc42b49f9033'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca084ce33e224b6482b485c2c90c0329'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd8ccb135a3f4a8fa16aa084d02a43ba'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd188559dd1cf4ade8d09b8ee09d7a706'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e6a8eecc82f243279f7a564d5ece9d0c'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8d7dc50f53e483bbdcc4526a5e095ff'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f0d2b7f2f1d84d4c9143c590d0d1b35c'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                ]
            }
        }
    }
}
