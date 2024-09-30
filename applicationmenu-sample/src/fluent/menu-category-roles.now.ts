import { Record, Role } from '@servicenow/sdk/core'

export const appCategory = Record({
    table: 'sys_app_category',
    $id: Now.ID[`sys_app_category_my_app`],
    data: {
        name: 'My App Category',
        style: 'border: 1px solid #96bcdc; background-color: #FBFBFB;',
        default_order: 100,
    },
})

export const activity_admin = Role({
    $id: Now.ID['12'],
    name: 'x_appmenu.activity_admin',
    description: 'my role description',
})
