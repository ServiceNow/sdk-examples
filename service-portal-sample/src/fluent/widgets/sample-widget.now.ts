import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['sample-widget'],
    name: 'Sample Widget',
    clientScript: Now.include('sample-widget.client.js'),
    serverScript: Now.include('sample-widget.server.js'),
    htmlTemplate: Now.include('sample-widget.html'),
    demoData: {
        data: {
            incidents: [99, 59, 80, 81, 56, 55, 40, 0, 5, 21, 11, 30],
        },
    },
    hasPreview: true,
    linkScript: `function link(scope, element, attrs, controller) {
}`,
    dependencies: ['a7a8754347011200ba13a5554ee4905c'],
})
