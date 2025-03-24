import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "si-module-1": {
                            "table": "sys_script_include",
                            "id": "2773d88b67f94a3ba5d3db0526113e70"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "4f504fefc16b4082bcc14f1a6a08c69b"
                        },
                        "x_sysmodulesample.x_require": {
                            "table": "sys_script_include",
                            "id": "7bd87d0dd6f84467bd6d628b5b49e791"
                        }
                    };
                deleted: {
                        "sys_module": [
                            "386d0c0584534c728bdee38c0d83b5c5"
                        ]
                    };
            }
        }
    }
}
