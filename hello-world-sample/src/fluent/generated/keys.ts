import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "x_helloworld_tableone_record1": {
                            "table": "x_helloworld_tableone",
                            "id": "bd8998c9466c4121b31f3d020dfbebb2"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "3d378ede22984277a29a8593a21b661e"
                        }
                    };
            }
        }
    }
}
