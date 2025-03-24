import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { businessRuleProcess } from '../server/br-rule-module'

BusinessRule({
    $id: Now.ID['br1'],
    name: 'Sample Business Rule',
    active: true,
    table: 'sc_req_item',
    when: 'before',
    script: script`
      (function executeRule(current, previous) {
        // Add your code here
      })
    `,
})

BusinessRule({
    $id: Now.ID['br2'],
    name: 'Sample Business Rule 2',
    active: true,
    table: 'sc_req_item',
    when: 'before',
    //@fluent-ignore
    script: businessRuleProcess,
})
