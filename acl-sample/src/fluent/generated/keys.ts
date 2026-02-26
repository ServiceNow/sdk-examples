import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '43f372640dab43caa3f689ef0701ff2c'
                    }
                    create_acl: {
                        table: 'sys_security_acl'
                        id: '7f585be43b7b40199e37ae7680e5b1bc'
                    }
                    delete_acl: {
                        table: 'sys_security_acl'
                        id: '70318f7c1c5e4a89950cefbc16478b49'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '465d2f2e623b4bf68838c7ceb4d5c1d0'
                    }
                    read_acl: {
                        table: 'sys_security_acl'
                        id: '94b88dc3e5d94e23ab4e6daed64abf37'
                    }
                    rest_acl: {
                        table: 'sys_security_acl'
                        id: '2e4209484e24433f8f4a07687b49a558'
                    }
                    write_acl: {
                        table: 'sys_security_acl'
                        id: 'bbc7f961bdc6403c89a4913b1c10cae4'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role'
                        id: '03af32b8272a4ad4919359f2a5d0f5e1'
                        key: {
                            name: 'x_acl_sample.admin'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5d99ed3492d849908e06b3aee5adc62e'
                        key: {
                            sys_security_acl: 'bbc7f961bdc6403c89a4913b1c10cae4'
                            sys_user_role: {
                                id: '03af32b8272a4ad4919359f2a5d0f5e1'
                                key: {
                                    name: 'x_acl_sample.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '92cbdae86c7e42f793fc5fa0638dd7d5'
                        key: {
                            sys_security_acl: '7f585be43b7b40199e37ae7680e5b1bc'
                            sys_user_role: {
                                id: '89d34427fc0d4a5f8c554885cd12c21f'
                                key: {
                                    name: 'x_other_scope.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a74caca6ae96441ab9b573708cab7dca'
                        key: {
                            sys_security_acl: '7f585be43b7b40199e37ae7680e5b1bc'
                            sys_user_role: {
                                id: '03af32b8272a4ad4919359f2a5d0f5e1'
                                key: {
                                    name: 'x_acl_sample.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c1ffb1cd76764166b069f21f21e9c119'
                        key: {
                            sys_security_acl: '2e4209484e24433f8f4a07687b49a558'
                            sys_user_role: {
                                id: '03af32b8272a4ad4919359f2a5d0f5e1'
                                key: {
                                    name: 'x_acl_sample.admin'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
