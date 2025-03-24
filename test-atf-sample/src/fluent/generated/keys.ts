import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "c5d900c644344c849495a43d75fbba30"
                        }
                    };
            }
        }
    }
}
