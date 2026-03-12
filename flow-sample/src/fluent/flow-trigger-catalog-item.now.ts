import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation'
import {
    CatalogItem,
    VariableSet,
    HtmlVariable,
    EmailVariable,
    IpAddressVariable,
    LabelVariable,
    MultiLineTextVariable,
    RichTextLabelVariable,
    SingleLineTextVariable,
    UrlVariable,
    YesNoVariable,
    ReferenceVariable,
    StringColumn,
} from '@servicenow/sdk/core'

// Variable Sets - defined using VariableSet plugin with variables
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

const softwareInstallationCatalogItem = CatalogItem({
    $id: Now.ID['software_installation_catalog_item'],
    flow: Now.ref('sys_hub_flow', 'test_flow_for_service_catalog'),
    name: 'Software Installation Test',
    shortDescription: 'Request software installation test',
    description: 'Use this form to request installation of software on your company device.',
    variables: {
        email: EmailVariable({
            question: 'Email',
            order: 12,
        }),
        html: HtmlVariable({
            question: 'HTML',
            order: 13,
            mandatory: true,
        }),
        ipAddress: IpAddressVariable({
            question: 'IP Address',
            order: 14,
        }),
        label: LabelVariable({
            question: 'Label',
            order: 15,
        }),

        multilineText: MultiLineTextVariable({
            question: 'Multi-line Text',
            order: 20,
        }),

        richTextLabel: RichTextLabelVariable({
            richText: 'Rich Text Label',
            order: 25,
        }),

        url: UrlVariable({
            question: 'URL',
            order: 30,
        }),

        yesNo: YesNoVariable({
            question: 'Yes No',
            includeNone: true,
            order: 32,
        }),
        singleline: SingleLineTextVariable({
            question: 'singleline',
            order: 330,
        }),
    },
    variableSets: [{ variableSet: userInfoVarSet, order: 100 }],
    ignorePrice: false,
})

Flow(
    {
        $id: Now.ID['test_flow_for_service_catalog'],
        name: 'Test flow for service catalog using fluent',
        description: 'Test flow for service catalog using fluent desc',
        flowVariables: {
            approverUser1: StringColumn({
                label: 'Approver User 1',
                mandatory: true,
            }),
        },
    },
    wfa.trigger(
        trigger.application.serviceCatalog,
        { $id: Now.ID['test_flow_for_service_catalog_trigger'] },
        {
            run_flow_in: 'background',
        }
    ),
    (params) => {
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['init_approval_vars'],
                annotation: 'Initialize approval variables',
            },
            params.flowVariables,
            {
                approverUser1: '62826bf03710200044e0bfc8bcbe5df1', // abel.tuter
            }
        )

        const getCatalogVariablesAction = wfa.action(
            action.core.getCatalogVariables,
            {
                $id: Now.ID['test_flow_for_service_catalog_step1'],
                annotation: 'Get catalog variables for Apple iPhone 13',
            },
            {
                requested_item: `${wfa.dataPill(params.trigger.request_item, 'reference')}`,
                template_catalog_item: `${softwareInstallationCatalogItem}`,
                catalog_variables: [
                    softwareInstallationCatalogItem.variables.html,
                    softwareInstallationCatalogItem.variables.email,
                    softwareInstallationCatalogItem.variables.ipAddress,
                    softwareInstallationCatalogItem.variables.userName,
                    softwareInstallationCatalogItem.variables.userEmail,
                    softwareInstallationCatalogItem.variables.userPhone,
                ],
            }
        )
        wfa.flowLogic.if(
            {
                $id: Now.ID['test_flow_for_service_catalog_if_condition'],
                annotation: 'Check if email is test@gmail.com and phone is 999999999',
                condition: `${wfa.dataPill(getCatalogVariablesAction.email, 'email')}=test@gmail.com^${wfa.dataPill(getCatalogVariablesAction.userPhone, 'string')}=999999999`,
            },
            () => {
                const askForApprovalAction = wfa.action(
                    action.core.askForApproval,
                    {
                        $id: Now.ID['test_flow_for_service_catalog_ask_for_approval'],
                        annotation: 'Ask for approval',
                    },
                    {
                        record: `${wfa.dataPill(params.trigger.request_item, 'reference')}`,
                        table: 'sc_req_item',
                        approval_reason:
                            'Approval required for catalog request with email test@gmail.com and phone 999999999.',
                        approval_field: 'approval',
                        // approval_conditions: wfa.approvalRules({
                        //     conditionType: 'OR',
                        //     ruleSets: [
                        //         {
                        //             action: 'Approves',
                        //             conditionType: 'AND',
                        //             rules: [
                        //                 [
                        //                     {
                        //                         ruleType: 'Any',
                        //                         users: ['62826bf03710200044e0bfc8bcbe5df1'],
                        //                         groups: [],
                        //                     },
                        //                 ],
                        //             ],
                        //         },
                        //     ],
                        // }),
                        approval_conditions: wfa.approvalRules({
                            conditionType: 'OR',
                            ruleSets: [
                                {
                                    action: 'Approves',
                                    conditionType: 'AND',
                                    rules: [
                                        [
                                            {
                                                ruleType: 'Any',
                                                users: [wfa.dataPill(params.flowVariables.approverUser1, 'string')],
                                                groups: [],
                                                manual: false,
                                            },
                                        ],
                                    ],
                                },
                            ],
                        }),
                    }
                )

                wfa.flowLogic.if(
                    {
                        $id: Now.ID['test_flow_for_service_catalog_if_approved'],
                        annotation: 'Check if approval state is Approved',
                        condition: `${wfa.dataPill(askForApprovalAction.approval_state, 'string')}=approved`,
                    },
                    () => {
                        const createCatalogTaskAction = wfa.action(
                            action.core.createCatalogTask,
                            {
                                $id: Now.ID['test_flow_for_service_catalog_create_task'],
                                annotation: 'Create catalog task for approved request',
                            },
                            {
                                ah_requested_item: `${wfa.dataPill(params.trigger.request_item, 'reference')}`,
                                ah_short_description: 'Complete the approved software installation request',
                                template_catalog_item: `${softwareInstallationCatalogItem}`,
                                catalog_variables: [
                                    softwareInstallationCatalogItem.variables.email,
                                    softwareInstallationCatalogItem.variables.html,
                                    softwareInstallationCatalogItem.variables.ipAddress,
                                ],
                                ah_wait: true,
                            }
                        )

                        wfa.flowLogic.if(
                            {
                                $id: Now.ID['test_flow_for_service_catalog_if_task_closed'],
                                annotation: 'Check if catalog task is Closed Complete',
                                condition: `${wfa.dataPill(createCatalogTaskAction.catalog_task.state, 'string')}=3`,
                            },
                            () => {
                                wfa.action(
                                    action.core.updateRecord,
                                    {
                                        $id: Now.ID['test_flow_for_service_catalog_update_record'],
                                        annotation: 'Update requested item state to Closed Complete',
                                    },
                                    {
                                        table_name: 'sc_req_item',
                                        record: `${wfa.dataPill(params.trigger.request_item, 'reference')}`,
                                        values: TemplateValue({
                                            state: '3',
                                        }),
                                    }
                                )
                            }
                        )
                    }
                )
                wfa.flowLogic.else(
                    {
                        $id: Now.ID['test_flow_for_service_catalog_else_not_approved'],
                        annotation: 'Handle not approved - update state to Closed Incomplete',
                    },
                    () => {
                        wfa.action(
                            action.core.updateRecord,
                            {
                                $id: Now.ID['test_flow_for_service_catalog_update_closed_incomplete'],
                                annotation: 'Update requested item state to Closed Incomplete',
                            },
                            {
                                table_name: 'sc_req_item',
                                record: `${wfa.dataPill(params.trigger.request_item, 'reference')}`,
                                values: TemplateValue({
                                    state: '4',
                                }),
                            }
                        )
                    }
                )
            }
        )

        wfa.action(
            action.core.log,
            {
                $id: Now.ID['test_flow_for_service_catalog_step2'],
                annotation: 'Log catalog variable color value',
            },
            {
                log_level: 'info',
                log_message: `Catalog variable, html = ${wfa.dataPill(getCatalogVariablesAction.email, 'email')} ${wfa.dataPill(getCatalogVariablesAction.html, 'html')} ${wfa.dataPill(getCatalogVariablesAction.ipAddress, 'string')} `, //Uses UI Identifier from step1
            }
        )
    }
)

// Example Flow: Create Catalog Task with Variables
Flow(
    {
        $id: Now.ID['create_catalog_task_flow'],
        name: 'Create Catalog Task with Variables',
        description: 'Demonstrates creating a catalog task with variables from a template catalog item',
    },
    wfa.trigger(
        trigger.application.serviceCatalog,
        { $id: Now.ID['create_catalog_task_trigger'] },
        {
            run_flow_in: 'background',
        }
    ),
    (params) => {
        // Step 1: Create a catalog task with variables from the software installation catalog item
        const createTaskAction = wfa.action(
            action.core.createCatalogTask,
            {
                $id: Now.ID['create_catalog_task_step1'],
                annotation: 'Create catalog task for software installation approval',
            },
            {
                ah_requested_item: `${wfa.dataPill(params.trigger.request_item, 'reference')}`,
                ah_short_description: 'Review and approve software installation request',
                template_catalog_item: `${softwareInstallationCatalogItem}`,
                catalog_variables: [
                    softwareInstallationCatalogItem.variables.email,
                    softwareInstallationCatalogItem.variables.html,
                    softwareInstallationCatalogItem.variables.ipAddress,
                    softwareInstallationCatalogItem.variables.singleline,
                    softwareInstallationCatalogItem.variables.userName,
                ],
                ah_wait: true,
            }
        )

        // Step 2: Log the catalog task creation
        wfa.action(
            action.core.log,
            {
                $id: Now.ID['create_catalog_task_step2'],
                annotation: 'Log catalog task creation',
            },
            {
                log_level: 'info',
                log_message: `Catalog Task Created: ${wfa.dataPill(createTaskAction.catalog_task, 'reference')}. Status: ${wfa.dataPill(createTaskAction.__action_status__.message, 'string')}`,
            }
        )
    }
)
