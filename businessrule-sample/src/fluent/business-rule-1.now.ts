import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['br1'],
    name: 'Sample Business Rule',
    active: true,
    table: 'sc_req_item',
    when: 'before',
    script: Now.include('./business-rule-1.server.js'),
})
