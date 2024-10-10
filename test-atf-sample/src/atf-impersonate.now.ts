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
        atf.server.impersonate({ user: 'd8f57f140b20220050192f15d6673a98' })
        atf.form.openNewForm({ table: 'sys_user', view: 'itil', formUI: 'standard_ui' })
        atf.form.fieldValueValidation({ conditions: 'first_name=^EQ', formUI: 'standard_ui', table: 'sys_user' })
        atf.form.fieldStateValidation({
            formUI: 'standard_ui',
            mandatory: [],
            notMandatory: ['title'],
            notReadOnly: [],
            notVisible: [],
            readOnly: [],
            table: 'sys_user',
            visible: [],
        })
        atf.form.setFieldValue({ fieldValues: { title: 'Senior Developer' }, formUI: 'standard_ui', table: 'sys_user' })
        atf.form.submitForm({ formUI: 'standard_ui', assertType: 'form_submitted_to_server' })
    }
)
