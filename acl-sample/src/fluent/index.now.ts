import { Acl, Role } from '@servicenow/sdk/core'

export const sampleAdmin = Role({
    name: 'x_acl_sample.admin'
})

Acl({
    $id: Now.ID['create_acl'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: [sampleAdmin, 'x_other_scope.manager'],
    table: 'x_acl_sample_table',
})

Acl({
    $id: Now.ID['write_acl'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: [sampleAdmin],
    table: 'x_acl_sample_table',
})

Acl({
    $id: Now.ID['delete_acl'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    table: 'x_acl_sample_table',
    securityAttribute: 'has_admin_role'
})

Acl({
    $id: Now.ID['read_acl'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    table: 'x_acl_sample_table',
    condition: 'field=value^active=true'
})

Acl({
    $id: Now.ID['rest_acl'],
    name: 'sample_api',
    type: 'rest_endpoint',
    operation: 'execute',
    roles: [sampleAdmin],
    securityAttribute: 'user_is_authenticated'
})


