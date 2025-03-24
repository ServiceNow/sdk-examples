import { Test } from '@servicenow/sdk/core'

Test(
    {
        $id: Now.ID['form-view-impersonate-test'],
        active: true,
        description:
            "A form that impersonates the user 'ATF User', and then uses the optional \"form view\" field of the 'open a new form' step to open a new 'User' form to its \"itil\" view, and then perform some actions on it.",
        name: 'Open a Form To a Specific View',
    },
    (atf) => {
        atf.server.impersonate({ $id: 'step1', user: 'd8f57f140b20220050192f15d6673a98' })
        atf.form.openNewForm({  $id: 'step2', table: 'sys_user', view: 'itil', formUI: 'standard_ui' })
        atf.form.fieldValueValidation({  $id: 'step3', conditions: 'first_name=^EQ', formUI: 'standard_ui', table: 'sys_user' })
        atf.form.fieldStateValidation({
            $id: 'step4',
            formUI: 'standard_ui',
            mandatory: [],
            notMandatory: ['title'],
            notReadOnly: [],
            notVisible: [],
            readOnly: [],
            table: 'sys_user',
            visible: [],
        })
        atf.form.setFieldValue({  $id: 'step5', fieldValues: { title: 'Senior Developer' }, formUI: 'standard_ui', table: 'sys_user' })
        atf.form.submitForm({  $id: 'step6', formUI: 'standard_ui' })
    }
)
