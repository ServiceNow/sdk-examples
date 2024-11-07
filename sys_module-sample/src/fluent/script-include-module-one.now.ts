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
        api_name: 'x_sysmodulesample.SampleClass',
        client_callable: false,
        mobile_callable: false,
        name: 'SampleClass',
        sandbox_callable: false,
        script: script`const sinc = require('./dist/server/sample-class.js'); 
var SampleClass = sinc.SampleClass;
`,
        sys_name: 'SampleClass',
    },
})
