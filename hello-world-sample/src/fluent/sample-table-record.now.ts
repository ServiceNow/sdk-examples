import { Record } from '@servicenow/sdk/core'

/**
 * This will create a single record in the x_helloworld_tableone table
 */
Record({
    table: 'x_helloworld_tableone',
    $id: Now.ID['x_helloworld_tableone_record1'],
    data: {
        stringField: 'Hello World 1',
        dateTimeField: '01-01-2024 12:00:00',
        integerField: 1,
    },
})
