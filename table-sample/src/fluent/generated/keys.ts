import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'abce133318dc4001ac2585dffe0a0bb5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '51e6c77a70c2464a8da58a764e9b8a06'
                    }
                    x_tablesample_extends_sample: {
                        table: 'sys_number'
                        id: 'c40c5ed1dba942f88ecb68ac20605272'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '0509ecc0142e4e75b1221bed785d2b4d'
                        key: {
                            name: 'x_tablesample_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '078ff73575d94307840e2fe7af057a43'
                        key: {
                            name: 'incident'
                            element: 'x_tablesample_custom_column'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f068a83a379405ab9666b368d5cdad2'
                        key: {
                            name: 'x_tablesample_extends'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '181b0196107a4ddfac7540a6ab7b7c45'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d978ee513db4875ba9c4c0c2f2afd13'
                        key: {
                            name: 'incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1fd1ef59cd69440f8d4c7a56f61260ef'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2047415537bb46289737c66060219888'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'string_column'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28e4b2ae08a64ae1b94e34795fde61bf'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2cdf1313ca914ef9b40c7a6392e984bb'
                        key: {
                            name: 'x_tablesample_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2cfe19164ea84fdf96ed0a09d37d1f1a'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'date_column'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '36e2ffa850c04927b70e80c6d33001ba'
                        key: {
                            name: 'x_tablesample_extends'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3bb47933ca804fb6b6ee512c69255275'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'color'
                            value: 'brown'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c367ba25c9a4b2eab9f9d69036e1c24'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'sys_created_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49732a26b2b04a7796f0d2950fcd29ce'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'boolean_column'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '523be9135e6644cd8b00a54e4224cb9e'
                        key: {
                            name: 'x_tablesample_extends'
                            element: 'user_reference_column'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '547bef06719c47ca9516f14ba188c136'
                        key: {
                            name: 'incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '597b1644239d48d7808a1985410b47cc'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '59a8d709a8e7446b9a47c3a76c6914e1'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'integer_column'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c47b88d34414dfbbed8655ff1005a0a'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'date_column'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62b8166b2526456b990532d022f7cba9'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'color'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '708f78c3073f4a1c852a384cf6265aef'
                        key: {
                            name: 'x_tablesample_extends'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7364eb1b3bd14222bfb72d408c7a7b17'
                        key: {
                            name: 'x_tablesample_extends'
                            element: 'user_reference_column'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7624e2145b254f82a4d7aa8f348f2e85'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a65391414af4066b12c6ee28343a349'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ef38ef3109e4245825013c9d7d3cdca'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '818734495fef41b8a2246520fe48053e'
                        key: {
                            name: 'incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8877121526bc476fba2ede827a45d5d4'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'sys_created_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cd23ff5f32b4508abe2d1e6853f0b18'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'boolean_column'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '90a941f98a5d4fe0bd52cf6b144a77e9'
                        key: {
                            name: 'x_tablesample_index'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '946af1f89a6a43a29ebef7884791bfff'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'color'
                            value: 'black'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '962ab79b3c844205b1d3c8132208367e'
                        key: {
                            name: 'x_tablesample_extends'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97376c3bb07644ddbe2d3c26832f1218'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'integer_column'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b2efa4549ee24c34bcf3a44a3f336ffb'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'color'
                            value: 'white'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bcfc511ea6444a418d3418732d03bef9'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'sys_created_by'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'bed00edc770a45efb0425d5f326b2d1b'
                        key: {
                            logical_table_name: 'x_tablesample_index'
                            col_name_string: 'color'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ce47b8b0edbc41858b69c9ec424ecc89'
                        key: {
                            name: 'x_tablesample_index'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cebc8bee60b34251a5320641d80bba78'
                        key: {
                            name: 'x_tablesample_name'
                            element: 'string_column'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1a37510e8e24328beb10d603c890eb4'
                        key: {
                            name: 'incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd70ff35308d34e08a97310d854fbe3f5'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e6a53d7aa0304ac59e4dcd8877a780f3'
                        key: {
                            category: 'x_tablesample_extends'
                            prefix: 'sample'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eae28c14c83a468aa8c357fc25877137'
                        key: {
                            name: 'incident'
                            element: 'x_tablesample_custom_column'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'edaea216191548e0ac9cb5f09e627630'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'sys_created_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee34c0c529534ec6afd8b260f450cd43'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1a276b329754b35a508176449b3425a'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3fbf87b1b744652a1b92eef3234a5f0'
                        key: {
                            name: 'x_tablesample_index'
                            element: 'owner'
                        }
                    },
                ]
            }
        }
    }
}
