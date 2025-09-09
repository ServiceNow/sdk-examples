import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4793b6956f9f43ba8f0118e996a57a60'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4e99f0f1bb40402e91ab4b1516366525'
                    }
                    'svelte-sample-ui-page': {
                        table: 'sys_ui_page'
                        id: '074bbcf305404e67ba1e6a07225df0a6'
                    }
                    'x_svelteuisample/main': {
                        table: 'sys_ux_lib_asset'
                        id: '6c43b0666ffd4d40b30e0ba5448145f7'
                    }
                    'x_svelteuisample/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '4409af63206a49b6a8545b72824a1452'
                    }
                }
            }
        }
    }
}
