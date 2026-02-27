import {
    CatalogItemRecordProducer,
    CatalogUiPolicy,
    CatalogClientScript,
    SingleLineTextVariable,
    MultiLineTextVariable,
    SelectBoxVariable,
    DateTimeVariable,
    AttachmentVariable,
    ReferenceVariable,
    Role,
    Table,
    StringColumn,
} from '@servicenow/sdk/core'

// ---------------------------------------------------------------------------
// Roles
// ---------------------------------------------------------------------------

const itil = Role({ name: 'x_servicecatalog.fulfiller' })

// ---------------------------------------------------------------------------
// Record Producer – Report an Incident
// ---------------------------------------------------------------------------

export const reportIncidentProducer = CatalogItemRecordProducer({
    $id: Now.ID['report_incident_producer'],
    name: 'Report an Incident',
    shortDescription: 'Quickly report a new incident from the service catalog',
    table: 'incident',
    state: 'published',
    availability: 'both',
    roles: [itil],

    // Record producer settings
    redirectUrl: 'generatedRecord',
    canCancel: true,

    variables: {
        short_desc: SingleLineTextVariable({
            question: 'Brief summary of the issue',
            order: 100,
            mandatory: true,
            mapToField: true,
            field: 'short_description',
        }),

        urgency: SelectBoxVariable({
            question: 'Urgency',
            order: 200,
            mandatory: true,
            choices: {
                '1': { label: 'High' },
                '2': { label: 'Medium' },
                '3': { label: 'Low' },
            },
            defaultValue: '2',
            mapToField: true,
            field: 'urgency',
        }),

        assigned_to: ReferenceVariable({
            question: 'Assign To',
            order: 250,
            referenceTable: 'sys_user',
            useReferenceQualifier: 'simple',
            referenceQualCondition: 'active=true',
            mapToField: true,
            field: 'assigned_to',
        }),

        affected_date: DateTimeVariable({
            question: 'When did the issue start?',
            order: 300,
        }),

        detail: MultiLineTextVariable({
            question: 'Detailed Description',
            order: 400,
            mapToField: true,
            field: 'description',
        }),

        screenshot: AttachmentVariable({
            question: 'Attach a screenshot (optional)',
            order: 500,
        }),
    },
})

// ---------------------------------------------------------------------------
// UI Policy – Hide screenshot when urgency is low
// ---------------------------------------------------------------------------

export const hideScreenshotForLowUrgency = CatalogUiPolicy({
    $id: Now.ID['hide_screenshot_low_urgency_policy'],
    shortDescription: 'Hide screenshot upload when urgency is low',
    catalogItem: reportIncidentProducer,
    active: true,
    onLoad: true,
    reverseIfFalse: true,
    catalogCondition: `${reportIncidentProducer.variables.short_desc}=catalogitem^${reportIncidentProducer.variables.assigned_to}ISNOTEMPTY^EQ`,
    appliesOnCatalogItemView: true,
    appliesOnRequestedItems: true,
    order: 300,
    actions: [
        {
            variableName: reportIncidentProducer.variables.screenshot,
            visible: false,
        },
    ],
})

// ---------------------------------------------------------------------------
// Client Script – Validate description on submit
// ---------------------------------------------------------------------------

export const incidentSubmitValidation = CatalogClientScript({
    $id: Now.ID['incident_submit_validation_script'],
    name: 'Validate incident description length on submit',
    catalogItem: reportIncidentProducer,
    type: 'onSubmit',
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
    script: `
function onSubmit() {
    var urgency = g_form.getValue('urgency');
    var detail = g_form.getValue('detail');
    if (urgency === '1' && (!detail || detail.length < 20)) {
        g_form.addErrorMessage('High urgency incidents require a detailed description (at least 20 characters).');
        return false;
    }
    return true;
}`,
})

// ---------------------------------------------------------------------------
// Client Script – Auto-set short description prefix based on urgency
// ---------------------------------------------------------------------------

export const incidentUrgencyChangeScript = CatalogClientScript({
    $id: Now.ID['incident_urgency_change_script'],
    name: 'Auto-set short description prefix based on urgency',
    catalogItem: reportIncidentProducer,
    type: 'onChange',
    variableName: reportIncidentProducer.variables.urgency,
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
    script: `
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;
    var shortDesc = g_form.getValue('short_desc');
    var prefixes = { '1': '[HIGH] ', '2': '[MEDIUM] ', '3': '[LOW] ' };
    // Remove any existing prefix
    shortDesc = shortDesc.replace(/^\\[(HIGH|MEDIUM|LOW)\\] /, '');
    if (prefixes[newValue]) {
        g_form.setValue('short_desc', prefixes[newValue] + shortDesc);
    }
}`,
})

export const x_servicecatalog_security_incident = Table({
    allowWebServiceAccess: true,
    label: 'Security incident',
    name: 'x_servicecatalog_security_incident',
    schema: {
        name: StringColumn({
            label: 'Name',
        }),
        description: StringColumn({
            label: 'Description',
        }),
    },
})

export const reportSecurityIncidentProducer = CatalogItemRecordProducer({
    $id: Now.ID['report_security_incident_producer'],
    name: 'Report an Incident',
    shortDescription: 'Quickly report a new incident from the service catalog',
    table: x_servicecatalog_security_incident.name,
    state: 'published',
    availability: 'both',

    // Record producer settings
    redirectUrl: 'generatedRecord',
    canCancel: true,

    variables: {
        short_desc: SingleLineTextVariable({
            question: 'Brief summary of the issue',
            order: 100,
            mandatory: true,
            mapToField: true,
            field: 'description',
        }),
    },
})
