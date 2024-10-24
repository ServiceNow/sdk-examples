import { ApplicationMenu } from '@servicenow/sdk/core'
import { activity_admin, appCategory } from './menu-category-roles.now'

export const menu = ApplicationMenu({
    $id: Now.ID['My App Menu'],
    title: 'My App Menu',
    hint: 'This is a hint',
    description: 'This is a description',
    category: appCategory,
    roles: [activity_admin],
    active: true,
})

export const menu2 = ApplicationMenu({
    $id: Now.ID['Menu 2'],
    title: 'Menu 2',
    hint: 'hint 2',
    description: 'This is a description',
    category: appCategory,
    active: true,
})
