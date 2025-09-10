import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '3902bcf9d99148c8be343b0dd0ba2b60'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: 'e4aa9208e0cb48f8a727c1c4c9b5069f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'acad64273ea54c598622ec9849d2e27c'
                    }
                    'x_vueuisample/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'a038dc0366b94a33a8bbaf2e01127f9b'
                    }
                    'x_vueuisample/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '27941cb6086c4ecf8bc1e649f5e7a2e2'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0e64757d8eb140f7be1ba7876c44ae65'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '13b046fbf58142cbb9ce7fa97938734f'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1bbb32f23de24aef89bc9b31660d4714'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '286f9e3bc0394999852037fbb2e29585'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2dc25355668f4fbbbec32f2d0f91c8b7'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ddce4383d1c4c87b12a76c0540df640'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3512e91876e5443d9d267636b08836ab'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ac0eda7f7444cc1bce7275e20ff8bc3'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c458145a1de4f8aa0fed79af1c52470'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cccd67cd9b84a0782e1c5c05456da49'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d5c9436d1514ba0adc6e9d331b04497'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4defca76405a4c23b1c027d44f36794d'
                        key: {
                            name: 'x_vueuisample_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54bc52617757458f9a942db57ae6cb96'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a8f80c33e7f44abbe01e851443d2fb4'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7aeaf10240ac404db1b4bbc54e423a48'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81667541fadd49459e71cc2a6db951a8'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '899932dafcf5427fabcecd0cf4a1643a'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa7eb0b59ee14760aa6b941dc8bbce36'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aefe2a6f9d0149178a3b2d7b7d6a365b'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b2e1ed1cd3ba4d679fee9bd1ad6b9349'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'b3078a4e192d4d0897353938d2a657ce'
                        key: {
                            category: 'x_vueuisample_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9bfca709fc74ecdad7053fc4a47f997'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb4bb97147794875b4049dd418291d23'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd3824fde3ce4e93993e936ea745c88b'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bdd49227885f42ca84d662ea5f98004f'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c62629009a2b41278564174862e7350e'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'de9d44812fe14f1cbcb43ed9cd14b9d9'
                        key: {
                            name: 'x_vueuisample_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa5491ab804f40e9ac7504620eb0d787'
                        key: {
                            name: 'x_vueuisample_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
