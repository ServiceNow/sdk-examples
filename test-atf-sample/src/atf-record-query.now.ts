import { Test } from '@servicenow/sdk/core'

export default Test(
    {
        $id: '132888e4731030104a905ee515f6a74e',
        active: true,
        description:
            'This test validates that AWA Service Channels, Queues and their related records are configured in a way that should allow routing and assignment to run smoothly.',
        name: 'AWA: Check Configuration',
    },
    (atf) => {
        atf.server.recordQuery({ $id: 'step1',
            assert: 'records_match_query',
            enforceSecurity: false,
            fieldValues: 'active=true^EQ',
            table: 'awa_service_channel',
        })
    }
)
