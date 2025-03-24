import { Record } from '@servicenow/sdk/core'

/**
 * This will expose a sys_module through a script include so that it can be used in other application scopes through this script include
 */
Record({
    $id: Now.ID['si-module-1'],
    table: 'sys_script_include',
    data: {
        access: 'public',
        active: true,
        api_name: 'x_sysmodulesample.SampleScriptInclude',
        client_callable: false,
        mobile_callable: false,
        name: 'SampleScriptInclude',
        sandbox_callable: false,
        script: Now.include('./script-include.server.js'),
        sys_name: 'SampleClass',
    },
})
