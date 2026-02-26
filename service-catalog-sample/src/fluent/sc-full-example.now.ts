import {
    CatalogItem,
    Record,
    VariableSet,
    SingleLineTextVariable,
    MultiLineTextVariable,
    ReferenceVariable,
    RequestedForVariable,
    SelectBoxVariable,
    EmailVariable,
} from '@servicenow/sdk/core'

// ---------------------------
// Variable Sets
// ---------------------------
const userInfoVarSet = VariableSet({
    $id: Now.ID['user_info_varset'],
    title: 'User Information',
    description: 'Basic user information required for this request',
    internalName: 'user_info_varset',
    type: 'singleRow',
    layout: 'normal',
    order: 100,
    displayTitle: true,
    version: 4,
    variables: {
        userName: ReferenceVariable({
            question: 'User Name',
            referenceTable: 'sys_user',
            mandatory: true,
            order: 100,
            tooltip: 'user name',
        }),
        userEmail: EmailVariable({
            question: 'Email Address',
            mandatory: true,
            order: 200,
        }),
        userPhone: SingleLineTextVariable({
            question: 'Phone Number',
            order: 300,
        }),
    },
    name: 'User information',
})

const hardwareSpecsVarSet = '3820df570a0a0b2700d944110d29fc55'

// ---------------------------
// Catalogs
// ---------------------------
const catalogServiceCatalog = 'e0d08b13c3330100c8b837659bba8fb4'
const catalogTechnicalCatalog = Record({
    $id: Now.ID['technical_catalog'],
    table: 'sc_catalog',
    data: {
        title: 'Enterprise IT Catalog',
        description: 'Enterprise IT services and infrastructure items',
        active: true,
        desktop_home_page: 'welcome',
        enable_cart: true,
        enable_wish_list: true,
        manager_role: 'admin',
        sys_domain: 'global',
    },
})

// ---------------------------
// Categories
// ---------------------------
const categoryHardware = 'd258b953c611227a0146101fb1be7c31'
const categorySoftware = Record({
    $id: Now.ID['software_category'],
    table: 'sc_category',
    data: {
        title: 'Software',
        description: 'Software related items',
        catalog: catalogTechnicalCatalog,
        active: true,
        order: 100,
        sys_domain: 'global',
    },
})

// ---------------------------
// Topics
// ---------------------------
const topicHardware = '782413a7c3053010069aec4b7d40ddf1'
const topicSoftware = Record({
    $id: Now.ID['software_topic'],
    table: 'topic',
    data: {
        name: 'Software',
        description: 'Software related knowledge articles',
        taxonomy: '1f5d5a40c3203010069aec4b7d40dd93',
        active: true,
        sys_domain: 'global',
    },
})

// ---------------------------
// User Criteria
// ---------------------------
const userCriteriaItilRole = 'afbaf8be844d40d7a526798fd6ecc5f8'
const userCriteriaDevDepartment = Record({
    $id: Now.ID['dev_department_criteria'],
    table: 'user_criteria',
    data: {
        name: 'Development Department Access',
        short_description: 'User criteria for Development department members',
        script: 'current.department.name == "Development";',
        active: true,
        match_all: false,
        advanced: true,
        sys_domain: 'global',
    },
})

// ---------------------------
// Example 1: Basic Catalog Item
// ---------------------------
export const basicLaptopRequest = CatalogItem({
    $id: Now.ID['basic_catalog_item'],
    name: 'Basic Laptop Request',
    shortDescription: 'Request a standard laptop for business use',
    description: 'Use this form to request a standard laptop for business use. Approval from your manager is required.',
    catalogs: [catalogServiceCatalog],
    categories: [categoryHardware],
    variableSets: [{ variableSet: userInfoVarSet, order: 100 }],
    executionPlan: '523da512c611228900811a37c97c2014',
})

// ---------------------------
// Example 2: Catalog Item with Pricing
// ---------------------------
export const pricedDeveloperWorkstation = CatalogItem({
    $id: Now.ID['priced_catalog_item'],
    name: 'Developer Workstation',
    shortDescription: 'High-performance developer workstation',
    description: 'Complete developer workstation with dual monitors, docking station, and peripherals.',
    catalogs: [catalogServiceCatalog],
    categories: [categoryHardware],
    cost: 1500,
    pricingDetails: [
        { amount: 1500, currencyType: 'USD', field: 'price' },
        { amount: 100, currencyType: 'USD', field: 'recurring_price' },
    ],
    variableSets: [{ variableSet: userInfoVarSet, order: 100 }],
    executionPlan: '523da512c611228900811a37c97c2014',
    variables: {
        shortDescription: SingleLineTextVariable({
            order: 1,
            question: 'Short Description',
        }),
        laptopType: SelectBoxVariable({
            order: 4,
            question: 'Laptop Type',
            mandatory: true,
            choices: {
                standard: { label: 'Standard Business Laptop' },
                performance: { label: 'Performance Laptop (Development/Design)' },
                executive: { label: 'Executive Laptop' },
                workstation: { label: 'Mobile Workstation' },
            },
            defaultValue: 'standard',
            tooltip: 'Select the type of laptop based on your work requirements',
        }),
    },
})

// ---------------------------
// Example 3: Catalog Item with Topics and Access Controls
// ---------------------------
export const softwareInstallation = CatalogItem({
    $id: Now.ID['topic_catalog_item'],
    name: 'Software Installation',
    shortDescription: 'Request software installation',
    description: 'Use this form to request installation of software on your company device.',
    catalogs: [catalogTechnicalCatalog],
    categories: [categorySoftware],
    assignedTopics: [topicSoftware, topicHardware],
    meta: ['software', 'installation', 'IT'],
    accessType: 'restricted',
    availableFor: [userCriteriaItilRole],
    notAvailableFor: [userCriteriaDevDepartment],
    variableSets: [
        { variableSet: userInfoVarSet, order: 100 },
        { variableSet: hardwareSpecsVarSet, order: 200 },
    ],
    executionPlan: '523da512c611228900811a37c97c2014',
    useScLayout: true,
    deliveryPlanScript: `// Custom delivery plan logic
gs.info('Processing delivery plan for software installation');`,
    entitlementScript: `// Entitlement check
return current.department.name == 'IT' || current.hasRole('admin');`,
    image: 'software_icon.png',
    icon: 'icon-software',
    roles: ['itil', 'admin'],
    variables: {
        shortDescription: SingleLineTextVariable({
            order: 1,
            question: 'Short Description',
        }),
        description: MultiLineTextVariable({
            order: 2,
            question: 'Description',
        }),
        name: RequestedForVariable({
            order: 3,
            question: 'Requested For',
        }),
        active_user: SingleLineTextVariable({
            order: 4,
            question: 'Active',
        }),
        company: ReferenceVariable({
            order: 5,
            question: 'Company',
            referenceTable: 'core_company',
        }),
    },
})
