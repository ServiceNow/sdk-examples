import { DateTimeColumn, IntegerColumn, StringColumn, Table } from '@servicenow/sdk/core'

/**
 * This will create a table in the ServiceNow instance called x_helloworld_tableone
 */
export const x_helloworld_tableone = Table({
    name: 'x_helloworld_tableone',
    label: 'Example Table',
    schema: {
        string_field: StringColumn({ label: 'String Field', mandatory: true }),
        integer_field: IntegerColumn({ label: 'Integer Field', mandatory: true }),
        datetime_field: DateTimeColumn({ label: 'Date Time Field' }),
    },
})
