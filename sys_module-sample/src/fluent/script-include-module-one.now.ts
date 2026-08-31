import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * This will expose a sys_module through a script include so that it can be used in other application scopes through this script include
 */
ScriptInclude({
    $id: Now.ID['si-module-1'],
    name: 'SampleClass',
    active: true,
    apiName: 'x_sysmodulesample.SampleClass',
    accessibleFrom: 'public',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    script: script`const sinc = require('./dist/server/sample-class.js');
var SampleClass = sinc.SampleClass;
`,
})
