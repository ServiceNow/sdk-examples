import { Record, Role } from '@servicenow/sdk/core'

export const appCategory = Record({
    $id: Now.ID['sys_app_category_my_app'],
    table: 'sys_app_category',
    data: {
        name: 'My App Category',
        style: 'border: 1px solid #96bcdc; background-color: #FBFBFB;',
        default_order: 100,
    },
})

export const activity_admin = Role({
    name: 'x_appmenu.activity_admin',
    description: 'my role description',
})
