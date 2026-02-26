import { Subflow, action, wfa } from '@servicenow/sdk/automation'
import { BooleanColumn, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const newUserOnboardingSubflow = Subflow(
    {
        $id: Now.ID['new_user_onboarding_subflow'],
        name: 'New User Onboarding Subflow',
        description: 'Sends welcome notification, assigns laptop and desk, returns assignment results',
        inputs: {
            user_sys_id: ReferenceColumn({
                label: 'User',
                referenceTable: 'sys_user',
                mandatory: true,
            }),
            office_location: ReferenceColumn({
                label: 'Office Location',
                referenceTable: 'cmn_location',
                mandatory: true,
            }),
        },
        outputs: {
            laptop_assigned: BooleanColumn({ label: 'Laptop Assigned' }),
            desk_assigned: BooleanColumn({ label: 'Desk Assigned' }),
            laptop_number: StringColumn({ label: 'Laptop Asset Number', maxLength: 40 }),
            desk_number: StringColumn({ label: 'Desk Asset Number', maxLength: 40 }),
        },
        flowVariables: {
            laptop_found: BooleanColumn({ label: 'Laptop Found Flag', default: false }),
            desk_found: BooleanColumn({ label: 'Desk Found Flag', default: false }),
        },
    },
    (params) => {
        const user = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_user'] },
            {
                table: 'sys_user',
                conditions: `sys_id=${wfa.dataPill(params.inputs.user_sys_id, 'reference')}`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        wfa.action(
            action.core.sendNotification,
            { $id: Now.ID['send_welcome_notification'] },
            {
                table_name: 'sys_user',
                record: wfa.dataPill(params.inputs.user_sys_id, 'reference'),
                notification: 'new_user_welcome_notification',
            }
        )

        const availableLaptop = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_available_laptop'] },
            {
                table: 'alm_hardware',
                conditions: 'assigned_to=NULL^install_status=1^substatus=available',
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['check_laptop_available'],
                condition: `${wfa.dataPill(availableLaptop.Record.sys_id, 'reference')}!=NULL`,
                annotation: 'Available laptop found',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['assign_laptop'] },
                    {
                        table_name: 'alm_hardware',
                        record: wfa.dataPill(availableLaptop.Record.sys_id, 'reference'),
                        values: TemplateValue({
                            assigned_to: wfa.dataPill(params.inputs.user_sys_id, 'reference'),
                            install_status: '2',
                            substatus: 'in_use',
                        }),
                    }
                )
            }
        )

        wfa.flowLogic.else(
            { $id: Now.ID['no_laptop_available'] },
            () => {
                wfa.action(
                    action.core.log,
                    { $id: Now.ID['log_no_laptop'] },
                    {
                        log_level: 'warn',
                        log_message: `No available laptop found for ${wfa.dataPill(user.Record.name, 'string')} — manual assignment required.`,
                    }
                )
            }
        )

        const availableDesk = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_available_desk'] },
            {
                table: 'alm_asset',
                conditions: `assigned_to=NULL^location=${wfa.dataPill(params.inputs.office_location, 'reference')}^install_status=1^substatus=available`,
                sort_type: 'sort_asc',
                if_multiple_records_are_found_action: 'use_first_record',
            }
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['check_desk_available'],
                condition: `${wfa.dataPill(availableDesk.Record.sys_id, 'reference')}!=NULL`,
                annotation: 'Available desk found at office location',
            },
            () => {
                wfa.action(
                    action.core.updateRecord,
                    { $id: Now.ID['assign_desk'] },
                    {
                        table_name: 'alm_asset',
                        record: wfa.dataPill(availableDesk.Record.sys_id, 'reference'),
                        values: TemplateValue({
                            assigned_to: wfa.dataPill(params.inputs.user_sys_id, 'reference'),
                            install_status: '2',
                            substatus: 'in_use',
                        }),
                    }
                )
            }
        )

        wfa.flowLogic.else(
            { $id: Now.ID['no_desk_available'] },
            () => {
                wfa.action(
                    action.core.log,
                    { $id: Now.ID['log_no_desk'] },
                    {
                        log_level: 'warn',
                        log_message: `No available desk at office location for ${wfa.dataPill(user.Record.name, 'string')} — manual assignment required.`,
                    }
                )
            }
        )

        wfa.action(
            action.core.sendNotification,
            { $id: Now.ID['send_onboarding_complete'] },
            {
                table_name: 'sys_user',
                record: wfa.dataPill(params.inputs.user_sys_id, 'reference'),
                notification: 'user_onboarding_complete_notification',
            }
        )

        wfa.flowLogic.assignSubflowOutputs(
            {
                $id: Now.ID['assign_outputs'],
                annotation: 'Return laptop and desk assignment results',
            },
            params.outputs,
            {
                laptop_assigned: true,
                desk_assigned: true,
                laptop_number: wfa.dataPill(availableLaptop.Record.asset_tag, 'string'),
                desk_number: wfa.dataPill(availableDesk.Record.asset_tag, 'string'),
            }
        )
    }
)
