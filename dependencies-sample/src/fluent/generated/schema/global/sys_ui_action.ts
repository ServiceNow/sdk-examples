// Generated by ServiceNow SDK

import {
    Table,
    StringColumn,
    BooleanColumn,
    ScriptColumn,
    GenericColumn,
    TranslatedFieldColumn,
    IntegerColumn,
    DomainIdColumn,
    DomainPathColumn,
    ReferenceColumn,
    TableNameColumn,
} from '@servicenow/sdk/core'
export const sys_ui_action = Table({
    name: 'sys_ui_action',
    extends: 'sys_metadata',
    schema: {
        action_name: StringColumn({
            mandatory: false,
            label: 'Action name',
            read_only: false,
            active: true,
            maxLength: 40,
            dropdown: 'none',
        }),
        active: BooleanColumn({
            mandatory: false,
            label: 'Active',
            read_only: false,
            active: true,
            default: true,
            maxLength: 40,
        }),
        client: BooleanColumn({
            mandatory: false,
            label: 'Client',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        client_script_v2: ScriptColumn({
            mandatory: false,
            label: 'Workspace Client Script',
            read_only: false,
            active: true,
            maxLength: 8000,
        }),
        comments: StringColumn({
            mandatory: false,
            label: 'Comments',
            read_only: false,
            active: true,
            maxLength: 4000,
        }),
        condition: GenericColumn({
            mandatory: false,
            label: 'Condition',
            read_only: false,
            active: true,
            maxLength: 254,
            column_type: 'condition_string',
        }),
        form_action: BooleanColumn({
            mandatory: false,
            label: 'Form action',
            read_only: false,
            active: true,
            maxLength: 40,
        }),
        form_button: BooleanColumn({
            mandatory: false,
            label: 'Form button',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        form_button_v2: BooleanColumn({
            mandatory: false,
            label: 'Workspace Form Button',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        form_context_menu: BooleanColumn({
            mandatory: false,
            label: 'Form context menu',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        form_link: BooleanColumn({
            mandatory: false,
            label: 'Form link',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        form_menu_button_v2: BooleanColumn({
            mandatory: false,
            label: 'Workspace Form Menu',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        form_style: StringColumn({
            mandatory: false,
            label: 'Form style',
            read_only: false,
            active: true,
            maxLength: 40,
            dropdown: 'dropdown_with_none',
            choices: {
                destructive: { label: 'Destructive', sequence: 2, inactive: false, language: 'en' },
                unstyled: { label: 'Unstyled', sequence: 3, inactive: false, language: 'en' },
                primary: { label: 'Primary', sequence: 1, inactive: false, language: 'en' },
            },
        }),
        format_for_configurable_workspace: BooleanColumn({
            mandatory: false,
            label: 'Format for Configurable Workspace',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        hint: TranslatedFieldColumn({
            mandatory: false,
            label: 'Hint',
            read_only: false,
            active: true,
            maxLength: 254,
        }),
        isolate_script: BooleanColumn({
            mandatory: false,
            label: 'Isolate script',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        list_action: BooleanColumn({
            mandatory: false,
            label: 'List action',
            read_only: false,
            active: true,
            maxLength: 40,
        }),
        list_banner_button: BooleanColumn({
            mandatory: false,
            label: 'List banner button',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        list_button: BooleanColumn({
            mandatory: false,
            label: 'List bottom button',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        list_choice: BooleanColumn({
            mandatory: false,
            label: 'List choice',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        list_context_menu: BooleanColumn({
            mandatory: false,
            label: 'List context menu',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        list_link: BooleanColumn({
            mandatory: false,
            label: 'List link',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        list_save_with_form_button: BooleanColumn({
            mandatory: false,
            label: 'Save with form button',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        list_style: StringColumn({
            mandatory: false,
            label: 'List style',
            read_only: false,
            active: true,
            maxLength: 40,
            dropdown: 'dropdown_with_none',
            choices: {
                unstyled: { label: 'Unstyled', sequence: 3, inactive: false, language: 'en' },
                primary: { label: 'Primary', sequence: 1, inactive: false, language: 'en' },
                destructive: { label: 'Destructive', sequence: 2, inactive: false, language: 'en' },
            },
        }),
        messages: StringColumn({
            mandatory: false,
            label: 'Messages',
            read_only: false,
            active: true,
            maxLength: 4000,
            dropdown: 'none',
        }),
        name: TranslatedFieldColumn({ mandatory: false, label: 'Name', read_only: false, active: true, maxLength: 40 }),
        onclick: StringColumn({
            mandatory: false,
            label: 'Onclick',
            read_only: false,
            active: true,
            maxLength: 254,
            dropdown: 'none',
        }),
        order: IntegerColumn({
            mandatory: false,
            label: 'Order',
            read_only: false,
            active: true,
            default: 100,
            maxLength: 40,
        }),
        script: ScriptColumn({ mandatory: false, label: 'Script', read_only: false, active: true, maxLength: 8000 }),
        show_insert: BooleanColumn({
            mandatory: false,
            label: 'Show insert',
            read_only: false,
            active: true,
            default: true,
            maxLength: 40,
        }),
        show_multiple_update: BooleanColumn({
            mandatory: false,
            label: 'Show multiple update',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        show_query: BooleanColumn({
            mandatory: false,
            label: 'Show query',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
        show_update: BooleanColumn({
            mandatory: false,
            label: 'Show update',
            read_only: false,
            active: true,
            default: true,
            maxLength: 40,
        }),
        sys_domain: DomainIdColumn({
            mandatory: false,
            label: 'Domain',
            read_only: false,
            active: true,
            default: 'global',
            maxLength: 32,
        }),
        sys_domain_path: DomainPathColumn({
            mandatory: false,
            label: 'Domain Path',
            read_only: false,
            active: true,
            default: '/',
            maxLength: 255,
        }),
        sys_id: GenericColumn({
            mandatory: false,
            label: 'Sys ID',
            read_only: false,
            active: true,
            maxLength: 32,
            column_type: 'GUID',
        }),
        sys_overrides: ReferenceColumn({
            mandatory: false,
            label: 'Overrides',
            read_only: false,
            active: true,
            maxLength: 32,
            referenceTable: 'sys_ui_action',
        }),
        table: TableNameColumn({ mandatory: false, label: 'Table', read_only: false, active: true, maxLength: 80 }),
        ui11_compatible: BooleanColumn({
            mandatory: false,
            label: 'List v2 Compatible',
            read_only: false,
            active: true,
            default: true,
            maxLength: 40,
        }),
        ui16_compatible: BooleanColumn({
            mandatory: false,
            label: 'List v3 Compatible',
            read_only: false,
            active: true,
            default: false,
            maxLength: 40,
        }),
    },
})
