import { BooleanColumn, DateTimeColumn, StringColumn, ReferenceColumn, Table } from '@servicenow/sdk/core'

export const x_tablesample_index = Table({
    name: 'x_tablesample_index',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
        }),
        color: StringColumn({
            label: 'Color',
            dropdown: 'suggestion',
            mandatory: true,
            choices: {
                white: { label: 'White' },
                brown: { label: 'Brown' },
                black: { label: 'Black' },
            },
        }),
        active: BooleanColumn({ mandatory: false, label: 'Active', read_only: false, active: true, default: true }),
        owner: ReferenceColumn({
            mandatory: true,
            label: 'User',
            read_only: false,
            active: true,
            referenceTable: 'sys_user',
        }),
        sys_created_by: StringColumn({
            mandatory: false,
            label: 'Created by',
            read_only: false,
            active: true,
            maxLength: 40,
            dropdown: 'none',
        }),
        sys_created_on: DateTimeColumn({ mandatory: false, label: 'Created', read_only: false, active: true }),
    },
    display: 'name',
    index: [{ element: 'color', name: 'color_index', unique: false }],
})
