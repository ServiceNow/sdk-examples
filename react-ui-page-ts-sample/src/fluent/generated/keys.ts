import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c9356ac0ae9a408e85b80abf067b72e8'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c2b96dd6226844beaa27467a7aed34a2'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '00c063eb0f744734b45638a5989a2ac4'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '03a05d5fcb574199b37b99b6c4d2d3c4'
                        key: {
                            name: 'x_reactuisample_incident'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0733a55d4a534a4dba5a906e219e1b89'
                        key: {
                            name: 'x_reactuisample_incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13684c6769774b1fb877f4cc50662fff'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '244ac7b794d4429b834e4a2f295e2746'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '255822531d794631b93a16bd05ed646c'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2865db2e7f86446e8ceadf3c040c097b'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28742868467541feae2aef3d73f4f288'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '2d18c2a182934f3f9ca36bdf5bbe3216'
                        key: {
                            name: 'x_reactuisample/main.js.map'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cdac18026944c5f8101339907de2bb5'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '522b6562f793474d9ff5c6e3fddaa771'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '563a968c611b4cf28be91932af8f2d4a'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '5713970f2e9d4a949db291cd69649e02'
                        key: {
                            name: 'x_reactuisample/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5715b9991ef14256aeabcb9f1cf9d96e'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '57e23001543f4882aae755a511ec76b8'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '5bf2cddba7df47d59443611f52d5d390'
                        key: {
                            endpoint: 'x_reactuisample_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '62425fe904ad4c1aad6bdad0eb09fad9'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '629753af3ba64116a668f6d8c108d895'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b8a2b5bba0c46dcad75b5f82646093f'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '75a62fb754c1465abeb3252e1953f7f5'
                        key: {
                            category: 'x_reactuisample_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e52fa9234d04b3b9da543baa050e953'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '831e38652269480387b99c37c9c35e1c'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '834af4312b174557aed8b362cbc29ca8'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fef64e9e41c4911a3a0e4b6460a5d63'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '91608152caaf4df2a70ade530271ee83'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9735b788be654530ac98be06ebe49f64'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ecb2be89f714b5786d9bc4dca1651a9'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b304d99c268f4705a6f5ae9203fe514b'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd1194a2faad4cc99737144c4ec01154'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf0c18cc10644824949662132e902377'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c188b14c5a9844f89f81053f9a9ba016'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce22fe22171847759a4ff2ec7814d7ff'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff2902cffa864c2d875d40ee12b5d954'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                ]
            }
        }
    }
}
