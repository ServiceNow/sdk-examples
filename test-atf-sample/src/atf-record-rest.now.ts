import { Test } from '@servicenow/sdk/core'

export default Test(
    {
        $id: 'a29a37229f703200ef4afa7dc67fcf9e',
        active: true,
        description:
            'Create an incident and retrieve it via REST Table API.\r\n\r\n***IMPORTANT***\r\nPlease create/select basic auth profile for Send REST Request - Inbound test step to run the test',
        name: 'Get Newly Created Resource via REST API Test',
    },
    (atf) => {
        atf.server.recordInsert({
            assertType: 'record_successfully_inserted',
            enforceSecurity: false,
            fieldValues: { short_description: 'REST Test Incident' },
            table: 'incident',
        })
        atf.rest.sendRestRequest({
            basicAuthentication: '',
            body: '',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            method: 'get',
            path: "/api/now/v2/table/incident/{{step['d42bb7229f703200ef4afa7dc67fcf46'].record_id}}",
            queryParameters: {},
        })
        atf.rest.assertStatusCode({ operation: 'equals', statusCode: 200 })
        atf.rest.assertResponseJSONPayloadIsValid({})
        atf.rest.assertJsonResponsePayloadElement({
            elementName: '/result/short_description',
            elementValue: 'REST Test Incident',
            operation: 'equals',
        })
    }
)