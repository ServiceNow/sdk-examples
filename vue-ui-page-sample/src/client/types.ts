// Common shared TypeScript types for the Vue UI application

// A ServiceNow API field may come back either as a primitive string or an object
// with `value` and `display_value` keys. This utility type captures that.
export type MaybeDisplayValue<T = string> =
    | T
    | {
          value: T
          display_value?: string
      }

// Shape of an Incident record used throughout the UI
export interface Incident {
    sys_id: MaybeDisplayValue<string>
    number: MaybeDisplayValue<string>
    short_description: MaybeDisplayValue<string>
    description: MaybeDisplayValue<string>
    status: MaybeDisplayValue<string>
    priority: MaybeDisplayValue<string>
    opened_at: MaybeDisplayValue<string>
}

// Payload used when creating or updating an incident
export interface IncidentPayload {
    short_description: string
    description: string
    status: string
    priority: string
}
