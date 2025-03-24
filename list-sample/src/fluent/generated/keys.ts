import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "1": {
                            "table": "sys_ui_list",
                            "id": "dc63b33efd5642ecac75f137595e49ab"
                        },
                        "llama_task_view_1": {
                            "table": "sys_ui_view",
                            "id": "fba209fec5d842e2beda55ccb3d17c12"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "d30689495d724439be935e499b5ab000"
                        }
                    };
                composite: [
                        {
                            "table": "sys_ui_list_element",
                            "id": "f6d238b87cf74105b7201797cc6694c1",
                            "key": {
                                "list": "dc63b33efd5642ecac75f137595e49ab",
                                "element": "name"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "ac4650d22a2b4bc3831d4bbbae7337f7",
                            "key": {
                                "list": "dc63b33efd5642ecac75f137595e49ab",
                                "element": "business_unit"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "9fbc2b896f314078ac57558e83c42d8c",
                            "key": {
                                "list": "dc63b33efd5642ecac75f137595e49ab",
                                "element": "vendor"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "d692b6e53f284881b98678dcaa9e2191",
                            "key": {
                                "list": "dc63b33efd5642ecac75f137595e49ab",
                                "element": "cpu_type"
                            }
                        }
                    ];
                deleted: {
                        "sys_ui_list": [
                            "9c762e704f774a05844ff82d18699728",
                            "0b7d5e812cb247a6bc18e8b3bbb4d926"
                        ],
                        "sys_ui_view": [
                            "a8fd1fbdf0d54d6d8f611be29ec2e2c0",
                            "53a4bddf969349df83e49d999feb966d"
                        ],
                        "sys_ui_list_element": [
                            "eb5493c1b0b646c3a045a3c605ba65fb",
                            "588f27b10f244ef1bdf4f440679e31b5",
                            "bcd91cb0659a4b2da1f88d5affc9b81d",
                            "2e3dcf25047e4761b7a39e9ac58a7ebd",
                            "1dc5d9fb996d4744aea0c1f5a229e748",
                            "ed1a916f2b564d56819e332cab2c7224"
                        ]
                    };
            }
        }
    }
}
