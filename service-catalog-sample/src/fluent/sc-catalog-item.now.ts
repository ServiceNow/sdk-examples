import {
    CatalogItem,
    CatalogUiPolicy,
    CatalogClientScript,
    SelectBoxVariable,
    MultipleChoiceVariable,
    ReferenceVariable,
    DateVariable,
    YesNoVariable,
    MultiLineTextVariable,
    CheckboxVariable,
    AttachmentVariable,
    ContainerStartVariable,
    ContainerSplitVariable,
    ContainerEndVariable,
    MaskedVariable,
    NumericScaleVariable,
    ListCollectorVariable,
    Role,
} from '@servicenow/sdk/core'
import { Flow, wfa, trigger } from '@servicenow/sdk/automation'
import { contactInfoVariableSet } from './variable-set.now'

// ---------------------------------------------------------------------------
// Roles
// ---------------------------------------------------------------------------

const itil = Role({ name: 'x_servicecatalog.itil' })

// ---------------------------------------------------------------------------
// Flow – Laptop Request Fulfillment
// ---------------------------------------------------------------------------

export const laptopFulfillmentFlow = Flow(
    {
        $id: Now.ID['laptop_fulfillment_flow'],
        name: 'Laptop Request Fulfillment',
        description: 'Triggers when a laptop request item is created.',
        runAs: 'system',
        runWithRoles: [],
        flowPriority: 'LOW',
    },
    wfa.trigger(
        trigger.record.created,
        { $id: Now.ID['laptop_request_trigger'], annotation: 'Trigger when request item is created' },
        {
            table: 'sc_req_item',
            condition: '',
            run_on_extended: 'false',
            run_flow_in: 'background',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
        }
    ),
    (_trigger) => {
        // Flow logic goes here
    }
)

// ---------------------------------------------------------------------------
// Catalog Item – Laptop Request
// ---------------------------------------------------------------------------

export const laptopRequest = CatalogItem({
    $id: Now.ID['laptop_request_catalog_item'],
    name: 'Laptop Request',
    shortDescription: 'Request a new laptop for an employee',
    description:
        'Use this catalog item to request a standard or high-performance laptop. Includes options for OS, accessories, and justification.',
    availability: 'both',
    order: 100,

    // Fulfillment
    fulfillmentAutomationLevel: 'semiAutomated',
    flow: laptopFulfillmentFlow,

    // Pricing
    ignorePrice: false,
    cost: 1200,
    recurringFrequency: 'yearly',
    billable: true,

    // Portal settings
    requestMethod: 'order',
    hideAddToCart: false,
    hideQuantitySelector: true,
    mandatoryAttachment: false,

    // Visibility
    visibleBundle: true,
    visibleGuide: true,
    visibleStandalone: true,

    // Access
    roles: [itil],

    // M2M relationships
    variableSets: [{ variableSet: contactInfoVariableSet, order: 0 }],

    // Variables
    variables: {
        // -- Container: Laptop Details --
        laptop_details_start: ContainerStartVariable({
            question: 'Laptop Details',
            displayTitle: true,
            layout: '2across',
            order: 1000,
        }),

        laptop_type: SelectBoxVariable({
            question: 'Laptop Type',
            order: 1100,
            mandatory: true,
            choices: {
                standard: { label: 'Standard (Business)' },
                performance: { label: 'High Performance (Engineering)' },
                ultrabook: { label: 'Ultrabook (Executive)' },
            },
            includeNone: false,
        }),

        operating_system: MultipleChoiceVariable({
            question: 'Operating System',
            order: 1200,
            mandatory: true,
            choices: {
                windows: { label: 'Windows 11 Pro' },
                macos: { label: 'macOS Sonoma' },
                linux: { label: 'Ubuntu 24.04 LTS' },
            },
            choiceDirection: 'down',
        }),

        laptop_details_split: ContainerSplitVariable({ order: 1300 }),

        needed_by: DateVariable({
            question: 'Date Needed By',
            order: 1400,
        }),

        assigned_user: ReferenceVariable({
            question: 'Assign To',
            order: 1500,
            referenceTable: 'sys_user',
            useReferenceQualifier: 'simple',
            referenceQualCondition: 'active=true',
        }),

        laptop_details_end: ContainerEndVariable({ order: 1600 }),

        // -- Additional Options --
        include_dock: YesNoVariable({
            question: 'Include Docking Station?',
            order: 2000,
            defaultValue: true,
        }),

        accessories: ListCollectorVariable({
            question: 'Additional Accessories',
            order: 2100,
            listTable: 'sc_cat_item',
            referenceQual: 'category=accessories',
        }),

        asset_tag_label: MaskedVariable({
            question: 'Previous Asset Tag (if replacing)',
            order: 2200,
            useConfirmation: true,
        }),

        satisfaction: NumericScaleVariable({
            question: 'How urgent is this request? (1-5)',
            order: 2300,
            scaleMin: 1,
            scaleMax: 5,
        }),

        justification: MultiLineTextVariable({
            question: 'Business Justification',
            order: 2400,
            mandatory: true,
        }),

        terms_accepted: CheckboxVariable({
            question: 'I accept the IT equipment usage policy',
            order: 2500,
            selectionRequired: true,
        }),

        supporting_doc: AttachmentVariable({
            question: 'Supporting Documentation',
            order: 2600,
        }),
    },
})

// ---------------------------------------------------------------------------
// UI Policy – Show dock option only for standard laptops
// ---------------------------------------------------------------------------

export const showDockForStandard = CatalogUiPolicy({
    $id: Now.ID['show_dock_for_standard_policy'],
    shortDescription: 'Show docking station option only for standard laptops',
    catalogItem: laptopRequest,
    active: true,
    onLoad: true,
    reverseIfFalse: true,
    catalogCondition: `${laptopRequest.variables.laptop_type}=standard^${laptopRequest.variables.assigned_user}ISNOTEMPTY^EQ`,
    appliesOnCatalogItemView: true,
    appliesOnRequestedItems: true,
    order: 100,
    actions: [
        {
            variableName: laptopRequest.variables.include_dock,
            visible: true,
        },
    ],
})

// ---------------------------------------------------------------------------
// Client Script – Auto-fill justification hint on type change
// ---------------------------------------------------------------------------

export const laptopTypeChangeScript = CatalogClientScript({
    $id: Now.ID['laptop_type_change_script'],
    name: 'Auto-set justification hint on laptop type change',
    catalogItem: laptopRequest,
    type: 'onChange',
    variableName: laptopRequest.variables.laptop_type,
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
    script: Now.include('./sc-catalog-item.client.js'),
})

// ---------------------------------------------------------------------------
// Client Script – Set default needed-by date on load
// ---------------------------------------------------------------------------

export const laptopOnLoadScript = CatalogClientScript({
    $id: Now.ID['laptop_onload_script'],
    name: 'Set default needed-by date to 2 weeks from today',
    catalogItem: laptopRequest,
    type: 'onLoad',
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
    script: `
function onLoad() {
    var today = new Date();
    today.setDate(today.getDate() + 14);
    var defaultDate = today.toISOString().split('T')[0];
    g_form.setValue('needed_by', defaultDate);
}`,
})
