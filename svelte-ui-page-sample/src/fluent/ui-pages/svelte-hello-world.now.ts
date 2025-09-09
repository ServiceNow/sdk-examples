import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import incidentPage from '../../client/index.html'

UiPage({
    $id: Now.ID['svelte-sample-ui-page'],
    endpoint: 'x_svelteuisample_sample.do',
    description: 'Svelte Sample UI Page',
    category: 'general',
    html: incidentPage,
    direct: true,
})
