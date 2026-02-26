import {
    VariableSet,
    CatalogUiPolicy,
    CatalogClientScript,
    SingleLineTextVariable,
    EmailVariable,
    Role,
} from '@servicenow/sdk/core'

// ---------------------------------------------------------------------------
// Roles
// ---------------------------------------------------------------------------

const itil = Role({ name: 'x_servicecatalog.requestor' })

// ---------------------------------------------------------------------------
// Reusable Variable Set – Contact Information
// ---------------------------------------------------------------------------

export const contactInfoVariableSet = VariableSet({
    $id: Now.ID['contact_info_variable_set'],
    title: 'Contact Information',
    description: 'Reusable set of contact-related variables',
    type: 'singleRow',
    layout: '2across',
    displayTitle: true,
    order: 100,
    readRoles: [itil],
    variables: {
        contact_name: SingleLineTextVariable({
            question: 'Full Name',
            order: 100,
            mandatory: true,
        }),
        contact_email: EmailVariable({
            question: 'Email Address',
            order: 200,
            mandatory: true,
        }),
        contact_phone: SingleLineTextVariable({
            question: 'Phone Number',
            order: 300,
            validateRegex: '/^\\+?[0-9\\-\\s]+$/',
        }),
    },
})

// ---------------------------------------------------------------------------
// UI Policy – Make phone mandatory when email is provided
// ---------------------------------------------------------------------------

export const contactPhoneMandatoryPolicy = CatalogUiPolicy({
    $id: Now.ID['contact_phone_mandatory_policy'],
    shortDescription: 'Make phone number mandatory when email is provided',
    variableSet: contactInfoVariableSet,
    appliesTo: 'set',
    active: true,
    onLoad: true,
    reverseIfFalse: true,
    catalogCondition: `${contactInfoVariableSet.variables.contact_name}=email^${contactInfoVariableSet.variables.contact_email}ISNOTEMPTY^EQ`,
    appliesOnCatalogItemView: true,
    appliesOnRequestedItems: true,
    order: 200,
    actions: [
        {
            variableName: contactInfoVariableSet.variables.contact_phone,
            mandatory: true,
        },
    ],
})

// ---------------------------------------------------------------------------
// Client Script – Auto-format phone number on change
// ---------------------------------------------------------------------------

export const contactPhoneFormatScript = CatalogClientScript({
    $id: Now.ID['contact_phone_format_script'],
    name: 'Auto-format phone number in contact info',
    variableSet: contactInfoVariableSet,
    appliesTo: 'set',
    type: 'onChange',
    variableName: contactInfoVariableSet.variables.contact_phone,
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
    script: `
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;
    var digits = newValue.replace(/\\D/g, '');
    if (digits.length === 10) {
        var formatted = '(' + digits.substring(0, 3) + ') ' + digits.substring(3, 6) + '-' + digits.substring(6);
        g_form.setValue('contact_phone', formatted);
    }
}`,
})
