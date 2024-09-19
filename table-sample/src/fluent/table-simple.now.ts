import { Table, StringColumn, IntegerColumn, BooleanColumn, DateColumn } from '@servicenow/sdk/core'

/**
 * This example creates a table in the ServiceNow platform with 4 columns.
 */
export const x_tablesimple_name = Table({
    name: 'x_tablesimple_name',
    schema: {
        string_column: StringColumn({ mandatory: true, lable: 'String Column' }),
        integer_column: IntegerColumn({ mandatory: true, label: 'Integer Column' }),
        boolean_column: BooleanColumn({ mandatory: true }),
        date_column: DateColumn({ mandatory: true }),
    },
})