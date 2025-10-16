import { UiPage } from '@servicenow/sdk/core'

UiPage({
    $id: Now.ID['ui-page-sample'],
    category: 'general',
    endpoint: 'x_uipagesample_mypage.do',
    description: 'This is a sample UI Page created with the SDK',
    html: Now.include('./ui-page.html'),
    clientScript: Now.include('./ui-page.client-script.client.js'),
    processingScript: Now.include('./ui-page.processing-script.server.js'),
})
