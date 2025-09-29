import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import index from '../../client/index.html'

UiPage({
    $id: Now.ID['helloworld-page'],
    endpoint: 'x_reactspectrum_helloworld.do',
    description: 'React Spectrum UI Page Example',
    category: 'general',
    html: index,
    direct: true,
})
