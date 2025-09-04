import { BusinessRule } from '@servicenow/sdk/core'
import { businessRuleProcess } from '../server/br-rule-module'

BusinessRule({
    $id: Now.ID['br2'],
    name: 'Sample Business Rule 2',
    active: true,
    table: 'sc_req_item',
    when: 'before',
    script: businessRuleProcess,
})
