import { RestApi } from '@servicenow/sdk/core'

/**
 * This is a simple example of a REST API build using fluent that has 4 routes (GET, POST, PUT, DELETE)
 * scripts are enclosed in the `script` tag to allow for inline syntax highlighting for server code
 * /api/restapi-hello
 */

RestApi({
    $id: Now.ID['restapi-hello'],
    name: 'rest api fluent sample',
    service_id: 'restapi-hello',
    consumes: 'application/json',
    routes: [
        {
            $id: Now.ID['restapi-hello-get'],
            name: 'get',
            method: 'GET',
            script: script`
              (function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
                return { message: 'Hello, World!' }
              })
            `,
        },
        {
            $id: Now.ID['restapi-hello-post'],
            name: 'post',
            method: 'POST',
            script: script`
              (function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
                return { post: { ...request.body } }
              })
            `,
        },
        {
            $id: Now.ID['restapi-hello-put'],
            name: 'put',
            method: 'PUT',
            script: script`
              (function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
                return { put: { ...request.body } }
              })
            `,
        },
        {
            $id: Now.ID['restapi-hello-delete'],
            name: 'delete',
            method: 'DELETE',
            script: script`
              (function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
                return { delete: { ...request.body } }
              })
            `,
        },
    ],
})
