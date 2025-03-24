import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "730a40fc55084eadb222f5bce6c62413"
                        },
                        "sample1": {
                            "table": "sys_script_client",
                            "id": "e544396779684144a0461af8ef82e732"
                        }
                    };
            }
        }
    }
}
