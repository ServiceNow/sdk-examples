import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'assets/IncidentForm-BuNt7Rf-.css': {
                        table: 'sys_ux_theme_asset'
                        id: 'c4bf456fe83040a6977013ae2b9ead40'
                        deleted: true
                    }
                    'assets/IncidentForm-Dw_InjHF.css': {
                        table: 'sys_ux_theme_asset'
                        id: '84a991e437f0414e9925dbaec894c8a3'
                        deleted: false
                    }
                    'assets/IncidentForm-hX-4O_o7.css': {
                        table: 'sys_ux_theme_asset'
                        id: '4fb3695a110f4432867fdb96b85b455a'
                        deleted: true
                    }
                    'assets/main-CSAvx5Vu.css': {
                        table: 'sys_ux_theme_asset'
                        id: '9530215f11c74baf8082397ab28e3448'
                        deleted: true
                    }
                    'assets/main-DeCZmlx3.css': {
                        table: 'sys_ux_theme_asset'
                        id: '370aa48133fb477a9adcd5db3f4d7cfa'
                        deleted: true
                    }
                    'assets/main-e9QbdRfV.css': {
                        table: 'sys_ux_theme_asset'
                        id: 'cdd0886abbda4b94a405a53aa81a5224'
                        deleted: false
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '8eb9db7e4d564174bb5a8dd08c7c04c2'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '6e1840646dc64038ac7faef7dab20a27'
                    }
                }
                composite: [
                    {
                        table: 'sys_ux_lib_asset'
                        id: '02ee53b64a1f48a6838ed31c207235c2'
                        key: {
                            name: 'x_reactuisample/IncidentForm'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03410386512844faaf3cb713016d1f35'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b267fcbc9f54171bbc1c94bf1962ef8'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c565c5a1b9f45dcbd654e72f71e9dd7'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c9155540a6a48ae9ce6d1b40abc0461'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '130b81c7958f415ab336a550147e472b'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1aa0df27d2d0409fbdd3f34cf6e78de6'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '259b6294e9a741c1afdca94fbeb65690'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26695801adaa431a9ef709a4f035ef7f'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28046e59e1b34586ae381c3758ee9949'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '369df1b774484e23b7ed2088958c2846'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3a3bc1ed22cb49efa5e1b4fc9b50948f'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41b62614d8be4fbc8ad6e18b61704dbf'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '459caa92fe624e318ceecf9e7244f106'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '52126d59136344b69b6f1c1c60f72524'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '530debf088e84aa3bdeb79921ad5493b'
                        key: {
                            name: 'x_reactuisample/IncidentForm.js.map'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '53e214bc598e491e9c535b9a7bf79171'
                        key: {
                            name: 'x_reactuisample/main'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53ed1ddfa4a942c68c1e49936a7e5b23'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54c40fb8675748f3a73a9cd2257696d9'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'resolved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7402089879044c11bbcba61d9ad899b2'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7468f77a5a1a4d72adf987b748e171e0'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7cbb79de194246b4a7eb23cdebd5f8f6'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90317ab98ec74e40960e704492fe4f13'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '957a5f0dba674748b99bf4b474445c91'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9a9fc8701e134079904772c88c0596ba'
                        key: {
                            name: 'x_reactuisample_incident'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'abc6942b3c2843f0abefcdd7f73c5992'
                        key: {
                            name: 'x_reactuisample/main.js.map'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'b294277057e848d1b09083506357da43'
                        key: {
                            category: 'x_reactuisample_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba6211c08af949b8a46e80812569fae5'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'priority'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bd901a920c694e0cadafb360f4aa2542'
                        key: {
                            name: 'x_reactuisample_incident'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'c627f9505961496991caa724f7295a61'
                        key: {
                            endpoint: 'x_reactuisample_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c892012d306b4fd980d60cab28cd5731'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd00cbf6a53847aaa2704f3b1fda29b4'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd96398e972174a6b98fbf959940ae176'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9e123b1f43044d88adbed09b0fb2890'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da4594a606844adf91da90b354b59d78'
                        key: {
                            name: 'x_reactuisample_incident'
                            element: 'status'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
