import { Record } from '@servicenow/sdk/core'
import { List } from '@servicenow/sdk/core'

const llama_task_view_1 = Record({
    table: 'sys_ui_view',
    $id: Now.ID['llama_task_view_1'],
    data: {
        name: 'llama_task_view_1',
        title: 'llama_task_view_1',
    },
})

List({
    $id: Now.ID['1'],
    table: 'cmdb_ci_server',
    view: llama_task_view_1,
    columns: [
        { element: 'name', position: 0 },
        { element: 'business_unit', position: 1 },
        { element: 'vendor', position: 2 },
        { element: 'cpu_type', position: 3 },
    ],
})
