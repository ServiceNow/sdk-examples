import { StateModel } from '@servicenow/sdk/core'
import { action, Flow, wfa, trigger } from '@servicenow/sdk/automation'

// ── State Model ───────────────────────────────────────────────────────────────
//
// Custom change model for emergency changes. Assess -> Authorize is gated on
// CAB approval, and the transition out of Implement requires all change tasks
// to be closed first.

export const emergencyChangeModel = StateModel({
    $id: Now.ID['emergency_change_model'],
    name: 'Sample Emergency Change Model',
    recordPreset: 'type=emergency^EQ',
    table: 'change_request',
    stateField: 'state',
    states: {
        new: { $id: Now.ID['emergency_change_new'], label: 'New', value: '-5', sequence: 0, initial: true },
        assess: { $id: Now.ID['emergency_change_assess'], label: 'Assess', value: '-4', sequence: 1 },
        authorize: { $id: Now.ID['emergency_change_authorize'], label: 'Authorize', value: '-3', sequence: 2 },
        implement: { $id: Now.ID['emergency_change_implement'], label: 'Implement', value: '-1', sequence: 3 },
        review: { $id: Now.ID['emergency_change_review'], label: 'Review', value: '0', sequence: 4 },
        closed: { $id: Now.ID['emergency_change_closed'], label: 'Closed', value: '3', sequence: 5 },
    },
    transitions: [
        { $id: Now.ID['emergency_change_new_to_assess'], from: 'new', to: 'assess' },
        {
            $id: Now.ID['emergency_change_assess_to_authorize'],
            from: 'assess',
            to: 'authorize',
            automatic: true,
            conditions: [
                {
                    $id: Now.ID['emergency_change_cond_approved'],
                    name: 'Approved',
                    conditionType: 'Transition Condition',
                    condition: 'approval=approved^EQ',
                    order: 100,
                },
            ],
        },
        { $id: Now.ID['emergency_change_authorize_to_implement'], from: 'authorize', to: 'implement' },
        {
            $id: Now.ID['emergency_change_implement_to_review'],
            from: 'implement',
            to: 'review',
            conditions: [
                {
                    $id: Now.ID['emergency_change_cond_no_open_tasks'],
                    name: 'No open change tasks',
                    conditionType: 'Transition Script',
                    conditionScript: Now.include('./check-open-change-tasks.js'),
                    description: 'All change tasks must be closed',
                    order: 100,
                },
            ],
        },
        { $id: Now.ID['emergency_change_review_to_closed'], from: 'review', to: 'closed' },
    ],
})

// ── Companion Flow ───────────────────────────────────────────────────────────
//
// StateModel only defines the approval gate above - it never sets `approval`
// itself. Without this Flow the change would get stuck in Assess forever, since
// nothing ever requests the CAB approval that the assess -> authorize condition
// is waiting on. The trigger is scoped to this model by name so it never fires
// for any other change model on the table.

export const requestEmergencyChangeAuthorization = Flow(
    {
        $id: Now.ID['request_emergency_change_authorization_flow'],
        name: 'Request Emergency Change Authorization',
        description: 'Requests CAB approval when an emergency change first reaches Assess',
    },
    wfa.trigger(
        trigger.record.createdOrUpdated,
        { $id: Now.ID['request_emergency_change_authorization_trigger'] },
        {
            table: 'change_request',
            condition: 'stateIN-4,-3^approval=not requested^chg_model.name=Sample Emergency Change Model',
            run_flow_in: 'background',
            trigger_strategy: 'unique_changes',
        }
    ),
    (params) => {
        const approval = wfa.action(
            action.core.askForApproval,
            { $id: Now.ID['request_emergency_change_authorization_ask'], annotation: 'Request CAB approval' },
            {
                record: wfa.dataPill(params.trigger.current, 'reference'),
                table: 'change_request',
                approval_field: 'approval',
                journal_field: 'approval_history',
                approval_reason: 'Emergency change authorization required',
                due_date: wfa.approvalDueDate({
                    action: 'reject',
                    dateType: 'actual',
                    date: '{}',
                    duration: 1,
                    durationType: 'days',
                    daysSchedule: '',
                }),
                approval_conditions: wfa.approvalRules({
                    conditionType: 'OR',
                    ruleSets: [
                        {
                            action: 'ApprovesRejects',
                            conditionType: 'AND',
                            rules: [
                                [
                                    {
                                        ruleType: 'Percent',
                                        percent: 50,
                                        users: [],
                                        groups: [wfa.dataPill(params.trigger.current.assignment_group, 'reference')],
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
                $id: Now.ID['request_emergency_change_authorization_if_approved'],
                condition: `${wfa.dataPill(approval.approval_state, 'string')}=approved`,
                annotation: 'If approved',
            },
            () => {
                wfa.action(
                    action.core.log,
                    { $id: Now.ID['request_emergency_change_authorization_log'] },
                    {
                        log_level: 'info',
                        log_message: `${wfa.dataPill(params.trigger.current.number, 'string')} authorized`,
                    }
                )
            }
        )
    }
)
