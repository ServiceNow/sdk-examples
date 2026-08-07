# State Model Sample

This example shows how to use the `StateModel` fluent interface to define a custom change model:
the states a `change_request` can be in, the transitions allowed between them, and the conditions
that gate each transition.

The model adds an `Assess` → `Authorize` gate for emergency changes that requires CAB approval
(`approval=approved`) before the change can move forward. Since `StateModel` only defines the gate
and never sets `approval` itself, this sample also includes the companion `Flow` that requests that
approval automatically once the change reaches `Assess`, scoped so it only fires for this model.

[State Model Overview](https://docs.servicenow.com/csh?topicname=state-model.html&version=latest)
[StateModel API](https://servicenow.github.io/sdk/api/statemodel-api)
