import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "x_tablesample_extends_sample": {
                            "table": "sys_number",
                            "id": "c40c5ed1dba942f88ecb68ac20605272"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "51e6c77a70c2464a8da58a764e9b8a06"
                        }
                    };
            }
        }
    }
}
