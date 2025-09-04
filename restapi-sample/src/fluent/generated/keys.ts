import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '377b73965e7e42a486b935fd6004e38f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '49b7b3317d76440a9ad7b3689916acc3'
                    }
                    'restapi-hello': {
                        table: 'sys_ws_definition'
                        id: '2cc05f8a6dfe4e4ba8f5abf496670b6d'
                    }
                    'restapi-hello-delete': {
                        table: 'sys_ws_operation'
                        id: '46266a4fd74a4afdb773aaf6fd2bf18a'
                    }
                    'restapi-hello-get': {
                        table: 'sys_ws_operation'
                        id: 'c74c5960cb504adabb6dcd55e11dd98f'
                    }
                    'restapi-hello-post': {
                        table: 'sys_ws_operation'
                        id: '4dff394b7e334e8aa0e8182a04ff6093'
                    }
                    'restapi-hello-put': {
                        table: 'sys_ws_operation'
                        id: 'f36afc4c6f7649c29925127846c4f2ac'
                    }
                    'restapi-modules': {
                        table: 'sys_ws_definition'
                        id: '45266cc5a74049bca652d83c9a773454'
                    }
                    'restapi-modules-get': {
                        table: 'sys_ws_operation'
                        id: '7284229e8e5c41c48fa2c973532dbf9f'
                    }
                    'src_server_rest-api-handler_js': {
                        table: 'sys_module'
                        id: 'eab370cb81f541aba65d872e634c1668'
                    }
                }
            }
        }
    }
}
