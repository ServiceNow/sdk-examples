import { Record } from '@servicenow/sdk/core'

/**
 * This will create a single record in the x_helloworld_tableone table
 */
Record({
    table: 'x_helloworld_tableone',
    $id: Now.ID['x_helloworld_tableone_record1'],
    data: {
        string_field: 'Hello World 1',
        datetime_field: '01-01-2024 12:00:00',
        integer_field: 1,
    },
})
