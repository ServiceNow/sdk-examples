import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '': {
                        table: 'sys_module'
                        id: 'f714b4004fa04df38c5d1565cbe2162b'
                        deleted: true
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'd7bc2b798ec1407b9d2810d3528c0b8e'
                    }
                    br1: {
                        table: 'sys_script'
                        id: '01a9dc2e17a14532a53f0be70bfd3e4b'
                    }
                    br2: {
                        table: 'sys_script'
                        id: '4e5e214faf0d4b0cac23f6224ca586e0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9b39b3d1445e41a5a6d4e1fc3622d36c'
                    }
                    'src_server_br-rule-module_ts': {
                        table: 'sys_module'
                        id: '098591cee6ed409c98ca2150f58eac88'
                    }
                }
                deleted: {
                    sys_module: ['f824d681d6a947758eb3c702e15cc6c7']
                }
            }
        }
    }
}
