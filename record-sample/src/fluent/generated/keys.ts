import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cmdb-ci-computer-1": {
                            "table": "cmdb_ci_computer",
                            "id": "044e6c57ce0e4f2d8373434e34c5c510"
                        },
                        "cmdb-ci-computer-2": {
                            "table": "cmdb_ci_computer",
                            "id": "dd56f5f0584a43b28de343be7503b813"
                        },
                        "incident-1": {
                            "table": "incident",
                            "id": "e2c8a94fb0a14a0cae6c23b700f6092a"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "1c859e9365eb4006a48c0776b8b76e17"
                        }
                    };
            }
        }
    }
}
