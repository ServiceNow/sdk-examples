import { Test } from '@servicenow/sdk/core'

export default Test(
    {
        $id: Now.ID['fail-description'],
        active: true,
        description:
            'A test that fails because the field "Description" has a value that does not match what we assert it to be',
        name: 'Fails Because an Assert Fails',
    },
    (atf) => {
        atf.server.impersonate({  $id: 'step1', user: 'd8f57f140b20220050192f15d6673a98' })
        atf.form.openNewForm({  $id: 'step2', table: 'sc_task', view: '', formUI: 'standard_ui' })
        atf.form.setFieldValue({
            $id: 'step3',
            fieldValues: {
                short_description: 'This is a task',
                description: 'About all the tasks that need to be discussed',
            },
            formUI: 'standard_ui',
            table: 'sc_task',
        })
        atf.form.fieldValueValidation({
            $id: 'step4',
            conditions: 'description=This is a different message than the one I just set^EQ',
            formUI: 'standard_ui',
            table: 'sc_task',
        })
        atf.form.submitForm({  $id: 'step5', formUI: 'standard_ui', assert: '' })
    }
)
