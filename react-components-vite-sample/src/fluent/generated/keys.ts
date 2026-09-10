import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '1 - Critical': {
                        table: 'sys_ui_message'
                        id: 'd24e7a2ad90343a18a56ef504da39fdd'
                    }
                    '2 - High': {
                        table: 'sys_ui_message'
                        id: '3b7ac904d14744fba74bdaa2cdabdf53'
                    }
                    '3 - Moderate': {
                        table: 'sys_ui_message'
                        id: '1fc1ad3b9c7440328eaf052db86e83f2'
                    }
                    '4 - Low': {
                        table: 'sys_ui_message'
                        id: 'dbb19910241343e2bdd8b55e986da6c3'
                    }
                    'assets/main-BQW7pr-m.css': {
                        table: 'sys_ux_theme_asset'
                        id: 'c77b6eb081224b8594a7db0ff8218bd1'
                    }
                    'assets/main-DfKftzes.css': {
                        table: 'sys_ux_theme_asset'
                        id: 'c80a3b890c74447b9e00440a958445c2'
                        deleted: true
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4bc9e5a58a3e4d1aa638008e5b73d39c'
                    }
                    Closed: {
                        table: 'sys_ui_message'
                        id: 'b9ddf206de7e4ebd87f9d5e89130e826'
                    }
                    'In Progress': {
                        table: 'sys_ui_message'
                        id: 'b502b5d6a79145588fee25546c9bcab9'
                    }
                    New: {
                        table: 'sys_ui_message'
                        id: '43a86a1af8744610b4b54cbec9849802'
                    }
                    'On Hold': {
                        table: 'sys_ui_message'
                        id: 'a557bda43a544bdda9e85ab7697b6c91'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9d75c446d3bc4b2fb24d572c3f88c62d'
                    }
                    Resolved: {
                        table: 'sys_ui_message'
                        id: 'dacdf5d4dce24d5cbfc27ddbf308aa2f'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '0328d76bceca4d1cbdef6ada376e01de'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03797453c9dc49d59140ca440b99406b'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '04a276cbb2e64a5a9bc7096758cfb1b8'
                        key: {
                            endpoint: 'x_rcvitesample_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0508ff56647544da8af17e94bef6309b'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0cc1d0c0e3404985901878306b4f7444'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1058aeef00654fb5b3ecbd635a9822b3'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2215e941efde4391b00a23e3eec1fa9c'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'priority'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '2a50415a1de64a8d9138628e38b5dcbc'
                        key: {
                            name: 'x_rcvitesample/IncidentForm'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a5aad4121d448b496acb2d300322f53'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a6eb23ca32c42949da0bc462c387c99'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'priority'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '481c850fd953446aa85e615e4346dff7'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4981687db4ca47608243ffc8f8cc1377'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '58b67cfdc5ad4f7690ceeb7f0a29c405'
                        key: {
                            name: 'x_rcvitesample_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5bd7a77086534ce98690997693872d14'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '698bd5187118427898abb4fc5e55c0ff'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '8573c09bbaed48c4be45c0a7943ff19c'
                        key: {
                            name: 'x_rcvitesample/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89f90ee4890c4cbfada84beaf60bdcab'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8c9febb5cabb43a8a3b7f70cf3ce7dd8'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'priority'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '947c15adeb7c4c7b851eb49de6175a14'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c14ceff4bf74fe2863de02ffb1313a0'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2440c53fba849648e465f86da4072b7'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a5762b381c2e4939ab75612b46264c3a'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae09e3c3e221426ca24c2164f5f1b309'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1ca02a15a5f40d1a6fbdba6e7491509'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'priority'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1cf8a69165e4f37b47e922df471865a'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                            value: 'resolved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b4af8e73e2b642e1a5e3be6a25eabc1c'
                        key: {
                            name: 'x_rcvitesample_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7f9bff3ff004f92a3b83bb77f81f3c5'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'bb2c16aafa114e7c9ae084497b60ff55'
                        key: {
                            category: 'x_rcvitesample_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1842a7a4f314fee8c050e9236a7a90d'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c75a1cc6dc7147ac9914f49856b43a1d'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'cc048d70165f4883a69371f45cd80d41'
                        key: {
                            name: 'x_rcvitesample/IncidentForm.js.map'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd1d9de3a5a854f0c9ea48a0d44d20fa4'
                        key: {
                            name: 'x_rcvitesample/main.js.map'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e80bf97aebab4124bc204626977082ce'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f135de85356f4979a3bc5210c14befff'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'feb59ae96b874f0b95544e17fd49d9d0'
                        key: {
                            name: 'x_rcvitesample_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
