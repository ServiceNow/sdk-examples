import { Record } from '@servicenow/sdk/core'

//This example generates a record in the incident table

Record({
    $id: Now.ID['cmdb-ci-computer-1'],
    table: 'cmdb_ci_computer',
    data: {
        asset_tag: 'ASSET001',
        assigned: '2024-04-21 07:00:00',
        category: 'Hardware',
        company: '31bea3d53790200044e0bfc8bcbe5dec',
        cost_center: '7fb1cc99c0a80a6d30c04574d14c0acf',
        cpu_manufacturer: '7aad6d00c611228400f00e0f80b67d2d',
        cpu_speed: 798,
        first_discovered: '2006-09-12 20:55:20',
        install_date: '2023-10-29 08:00:00',
        model_id: 'a9a2d0c3c6112276010db16c5ddd3461',
        name: 'Computer 1',
        os: 'Windows XP Professional',
        os_service_pack: 'Service Pack 3',
        os_version: '5.1',
        po_number: 'PO27711',
        ram: '1543',
        serial_number: 'L3BB911',
    },
})

Record({
    $id: Now.ID['cmdb-ci-computer-2'],
    table: 'cmdb_ci_computer',
    data: {
        asset_tag: 'ASSET002',
        assigned: '2024-04-21 07:30:00',
        category: 'Hardware',
        company: '31bea3d53790200044e0bfc8bcbe5dec',
        cost_center: '7fb1cc99c0a80a6d30c04574d14c0acf',
        cpu_manufacturer: '7aad6d00c611228400f00e0f80b67d2d',
        cpu_speed: 798,
        first_discovered: '2006-09-12 20:55:20',
        install_date: '2023-10-29 08:00:00',
        model_id: 'a9a2d0c3c6112276010db16c5ddd3461',
        name: 'Computer 1',
        os: 'Windows XP Professional',
        os_service_pack: 'Service Pack 3',
        os_version: '5.1',
        po_number: 'PO27711',
        ram: '1543',
        serial_number: 'L3BB911',
    },
})
