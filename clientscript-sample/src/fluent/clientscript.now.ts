import { ClientScript } from '@servicenow/sdk/core'

export default ClientScript({
    $id: Now.ID['sample1'],
    type: 'onLoad',
    ui_type: 'all',
    table: 'incident',
    global: true,
    name: 'sample_client_script',
    active: true,
    applies_extended: false,
    description: 'sample client script',
    isolate_script: false,
    script: Now.include('./clientscript.client.js')
})
