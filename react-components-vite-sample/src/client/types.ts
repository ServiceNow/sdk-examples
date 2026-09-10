// The Table API returns each field as an object when queried with sysparm_display_value=all,
// and as a plain string otherwise, so every field can be either shape.
export interface FieldValue {
    value: string
    display_value: string
}

export type IncidentField = string | FieldValue

export interface Incident {
    sys_id: IncidentField
    number: IncidentField
    short_description: IncidentField
    description: IncidentField
    status: IncidentField
    priority: IncidentField
    opened_at: IncidentField
}

// Shape posted back to the Table API when creating or updating an incident
export interface IncidentInput {
    short_description: string
    description: string
    status: string
    priority: string
}

export interface TableResponse<T> {
    result?: T
}

export interface TableError {
    error?: {
        message?: string
        detail?: string
    }
}
