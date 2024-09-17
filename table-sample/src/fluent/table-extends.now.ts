import { ReferenceColumn, Table } from '@servicenow/sdk/core'

/**
 * This example creates a table in the ServiceNow platform that extends the task table, and has a reference colun
 */
export const x_tablesimple_extends = Table({
    name: 'x_tablesimple_extends',
    extends: 'task',
    schema: {
        user_reference_column: ReferenceColumn({
            mandatory: true,
            label: 'User Reference',
            referenceTable: 'sys_user',
        }),
    },
})
