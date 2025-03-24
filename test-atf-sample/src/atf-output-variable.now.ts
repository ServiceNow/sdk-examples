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
        atf.form.openNewForm({ $id: 'step1', table: 'incident', view: '', formUI: 'standard_ui' })
        atf.form.setFieldValue({ $id: 'step2', fieldValues: { short_description: 'test' }, formUI: 'standard_ui', table: 'incident' })
        const step3 = atf.form.submitForm({ $id: 'step3', formUI: 'standard_ui', assert: 'form_submitted_to_server' })
        atf.form.openExistingRecord({ $id: 'step4',
            formUI: 'standard_ui',
            recordId: step3.record_id,
            selectedTabIndex: 1,
            table: 'incident',
            view: '',
        })
        atf.server.log({ $id: 'ste5', log: `Finished opening a record with ${step3.record_id} as an id` })
    }
)
