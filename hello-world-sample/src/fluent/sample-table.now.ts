import { DateTimeColumn, IntegerColumn, StringColumn, Table } from '@servicenow/sdk/core'

/**
 * This will create a table in the ServiceNow instance called x_helloworld_tableone
 */
export const x_helloworld_tableone = Table({
    name: 'x_helloworld_tableone',
    label: 'Example Table',
    schema: {
        stringField: StringColumn({ mandatory: true }),
        integerField: IntegerColumn({ mandatory: true }),
        dateTimeField: DateTimeColumn({}),
    },
})
