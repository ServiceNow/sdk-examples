import { Record } from '@servicenow/sdk/core'

//This example generates a record in the incident table

Record({
    $id: Now.ID['incident-1'],
    table: 'incident',
    data: {
        number: 'INC0010001',
        active: true,
        short_description: 'This is a sample incident',
        description: 'This is a sample incident description',
        comments: 'This is a sample comment',
        cmdb_ci: '265e09dbeb584baf9c111a7148c99529',
        urgency: '1',
        activity_due: '2025-01-02 12:30:00',
        approval: 'not requested',
        caller_id: '77ad8176731313005754660c4cf6a7de',
        notify: '1',
        priority: '3',
        opened_at: '2025-01-01 12:30:00',
    },
})
