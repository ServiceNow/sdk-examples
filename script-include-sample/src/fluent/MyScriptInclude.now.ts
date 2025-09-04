import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['my-script-include'],
    name: 'MyScriptInclude',
    active: true,
    apiName: 'x_scriptincludes.MyScriptInclude',
    script: Now.include('./MyScriptInclude.server.js'),
})
