import { gs, GlideRecord } from '@servicenow/glide'

export function businessRuleProcess(current: GlideRecord, previous: GlideRecord) {
    // Add your code here
    if (current.getValue('assigned_to') != previous.getValue('assigned_to')) {
        gs.info(
            `${current.getValue('short_description')} in ${current.getValue('table')} was reassigned to ${current.getDisplayValue('assigned_to')}.`
        )
    }
}
