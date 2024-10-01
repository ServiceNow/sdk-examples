import { Record } from '@servicenow/sdk/core'

// Use the sc_cat_item table dependency that was downloaded

Record({
    $id: Now.ID['cat-item-1'],
    table: 'sc_cat_item',
    data: {
        name: 'Cat Item 1',
        description: 'This is a cat item',
        price: 100,
    },
})
