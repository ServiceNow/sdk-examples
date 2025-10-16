import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'bd66ebb3e6d14d29aa1d0c80b606e5cd'
                    }
                    car_info: {
                        table: 'sys_ui_action'
                        id: 'b83a4731725647138248271605a03b3f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f1a3915823f34bef9daa19e7b2dedde0'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_action_view'
                        id: '0f1da5f77e8d474b90d4b9533b25f572'
                        key: {
                            sys_ui_action: 'b83a4731725647138248271605a03b3f'
                            sys_ui_view: {
                                id: '09f94336a03b4b4a9a4faacd2b8f750a'
                                key: {
                                    name: 'specialView'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b301ae8a221f41ac8359c2dff2bf8be0'
                        key: {
                            sys_ui_action: 'b83a4731725647138248271605a03b3f'
                            sys_user_role: {
                                id: 'e17ab1c15d424e8f99531cdd5ac8d795'
                                key: {
                                    name: 'u_requestor'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
