import { Test } from '@servicenow/sdk/core'

/**
 * This example of an ATF Test uses an output variable to be used in subsequent steps
 */

Test(
    {
        active: true,
        failOnServerError: true,
        name: 'Simple example',
        description: 'An illustrative test written in fluent',
        $id: Now.ID[1],
    },
    (atf) => {
        atf.form.openNewForm({ table: 'incident', view: '', formUI: 'standard_ui' })
        atf.form.setFieldValue({ fieldValues: { short_description: 'test' }, formUI: 'standard_ui', table: 'incident' })
        const step3 = atf.form.submitForm({ formUI: 'standard_ui', assertType: 'form_submitted_to_server' })
        atf.form.openExistingRecord({
            formUI: 'standard_ui',
            recordId: step3.record_id,
            selectedTabIndex: 1,
            table: 'incident',
            view: '',
        })
        atf.server.log({ log: `Finished opening a record with ${step3.record_id} as an id` })
    }
)
