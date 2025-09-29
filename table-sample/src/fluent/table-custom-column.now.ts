import { StringColumn, Table } from '@servicenow/sdk/core'

export const incident = Table({
    name: 'incident' as any,
    schema: {
        x_tablesample_custom_column: StringColumn({
            label: 'Custom Column',
            maxLength: 40,
        }),
    },
})
