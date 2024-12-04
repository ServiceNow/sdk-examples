import { RestApi } from '@servicenow/sdk/core'
import { process } from '../server/rest-api-handler'

/**
 * This is a simple example of a REST API build using fluent that has 4 routes (GET, POST, PUT, DELETE)
 * scripts are enclosed in the `script` tag to allow for inline syntax highlighting for server code
 * /api/restapi-hello
 */

RestApi({
    $id: Now.ID['restapi-modules'],
    name: 'rest api fluent modules sample',
    service_id: 'restapi_modules',
    consumes: 'application/json',
    routes: [
        {
            $id: Now.ID['restapi-modules-get'],
            name: 'get',
            method: 'GET',
            script: process,
        },
    ],
})
