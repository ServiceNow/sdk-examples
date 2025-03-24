import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cat-item-1": {
                            "table": "sc_cat_item",
                            "id": "fb5899485c084748ba80b34047401990"
                        },
                        "edit_in_catalog_builder": {
                            "table": "sys_ui_action",
                            "id": "42826fea22d74c3e881e687d345e77a1"
                        },
                        "edit_in_catalog_builder_role": {
                            "table": "sys_ui_action_role",
                            "id": "a2c24893e3784fd9a73ce22b5e357bbb"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "7025f857bc4d44a492c370ac5ce14913"
                        },
                        "si-module-1": {
                            "table": "sys_script_include",
                            "id": "a70f0ac2a89c436bab592d76381605d6"
                        }
                    };
            }
        }
    }
}
