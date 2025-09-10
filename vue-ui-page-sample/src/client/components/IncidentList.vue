<template>
    <div class="incident-list">
        <div v-if="incidents.length === 0" class="no-incidents">No incidents found</div>
        <table v-else>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Opened</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="incident in incidents"
                    :key="typeof incident.sys_id === 'object' ? incident.sys_id.value : incident.sys_id"
                >
                    <td>{{ getDisplayValue(incident.number) }}</td>
                    <td>{{ getDisplayValue(incident.short_description) }}</td>
                    <td>
                        <span class="status-badge" :class="getStatusClass(incident.status)">
                            {{ getDisplayValue(incident.status) }}
                        </span>
                    </td>
                    <td>
                        <span class="priority-badge" :class="getPriorityClass(incident.priority)">
                            {{ getDisplayValue(incident.priority) }}
                        </span>
                    </td>
                    <td>{{ getDisplayValue(incident.opened_at) }}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="edit-button" @click="onEdit(incident)">Edit</button>
                            <button class="delete-button" @click="handleDelete(incident)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import './IncidentList.css'
import type { IncidentService } from '../services/IncidentService'
import type { Incident } from '../types'

const props = defineProps<{
    incidents: Incident[]
    onEdit: (incident: Incident) => void
    onRefresh: () => void
    service: IncidentService
}>()

import type { MaybeDisplayValue } from '../types'

const getDisplayValue = (field: MaybeDisplayValue<string>) =>
    typeof field === 'object' ? (field.display_value ?? field.value) : field

const getStatusClass = (status: MaybeDisplayValue<string>) => {
    const value = typeof status === 'object' ? status.value : status
    switch (value) {
        case 'new':
            return 'status-new'
        case 'in_progress':
            return 'status-in-progress'
        case 'on_hold':
            return 'status-on-hold'
        case 'resolved':
            return 'status-resolved'
        case 'closed':
            return 'status-closed'
        default:
            return ''
    }
}

const getPriorityClass = (priority: MaybeDisplayValue<string>) => {
    const value = typeof priority === 'object' ? priority.value : priority
    switch (value) {
        case '1':
            return 'priority-critical'
        case '2':
            return 'priority-high'
        case '3':
            return 'priority-moderate'
        case '4':
            return 'priority-low'
        default:
            return ''
    }
}

const handleDelete = async (incident: Incident) => {
    if (!confirm('Are you sure you want to delete this incident?')) return
    try {
        const sysId = typeof incident.sys_id === 'object' ? incident.sys_id.value : incident.sys_id
        await props.service.delete(sysId)
        props.onRefresh()
    } catch (error: any) {
        console.error('Failed to delete incident:', error)
        alert('Failed to delete incident: ' + (error.message || 'Unknown error'))
    }
}
</script>
