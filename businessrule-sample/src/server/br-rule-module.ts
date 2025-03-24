import { gs } from '@servicenow/glide'

export function businessRuleProcess(current: any, previous: any) {
    // Add your code here
    if(current.assigned_to != previous.assigned_to) {
        gs.info(`${current.short_description} in ${current.table} was reassigned to ${current.assigned_to.getDisplayValue()}.`)
    }
}
