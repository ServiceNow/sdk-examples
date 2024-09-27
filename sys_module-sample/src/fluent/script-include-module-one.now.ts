import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['si-module-1'],
    table: 'sys_script_include',
    data: {
        access: 'public',
        active: true,
        api_name: 'x_sysmodulesample.ModuleOne',
        name: 'ModuleOne',
        script: "const sinc = require('./src/server/sample/module-one.js'); var ModuleOne = sinc.ModuleOne;",
        sys_name: 'ModuleOne',
    },
})
