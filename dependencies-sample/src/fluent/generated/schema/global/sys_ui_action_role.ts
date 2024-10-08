// Generated by ServiceNow SDK

import { Table, GenericColumn, ReferenceColumn } from '@servicenow/sdk/core'
export const sys_ui_action_role = Table({
    name: 'sys_ui_action_role',
    extends: 'sys_metadata',
    schema: {
        sys_id: GenericColumn({
            mandatory: false,
            label: 'Sys ID',
            read_only: false,
            active: true,
            column_type: 'GUID',
        }),
        sys_ui_action: ReferenceColumn({
            mandatory: false,
            label: 'UI Action',
            read_only: false,
            active: true,
            referenceTable: 'sys_ui_action',
        }),
        sys_user_role: ReferenceColumn({
            mandatory: false,
            label: 'Role',
            read_only: false,
            active: true,
            referenceTable: 'sys_user_role',
        }),
    },
})
