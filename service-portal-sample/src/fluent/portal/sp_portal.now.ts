import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['sample-portal'],
    table: 'sp_portal',
    data: {
        title: 'Sample Portal',
        url_suffix: 'sample',
        logo: Now.attach('../../../assets/servicenow.svg'),
        icon: Now.attach('../../../assets/servicenow.jpg'),
    },
})
