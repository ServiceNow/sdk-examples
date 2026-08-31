import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '0e7bd3521f54424e95595a8b8cad5386'
                    }
                    'date-fns@4.4.0/index.js': {
                        table: 'sys_module'
                        id: 'a9b75da43f984e9b9c2bea5ec8b326ec'
                    }
                    'date-fns@4.4.0/package.json': {
                        table: 'sys_module'
                        id: '62149162746f4c698b2cc114312aa667'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4f504fefc16b4082bcc14f1a6a08c69b'
                    }
                    'si-module-1': {
                        table: 'sys_script_include'
                        id: '2773d88b67f94a3ba5d3db0526113e70'
                    }
                    'src_server_sample-script-include-import_ts': {
                        table: 'sys_module'
                        id: '91b32e5c49d548239365164f740a842c'
                    }
                    'src_server_tpm-sample_ts': {
                        table: 'sys_module'
                        id: 'f68809d2f0ea4bad9d0f9b3bd4728108'
                    }
                    'src_server_use-script-include-sample_ts': {
                        table: 'sys_module'
                        id: 'c1694068c29d4affa216a437f771b9f7'
                    }
                }
            }
        }
    }
}
