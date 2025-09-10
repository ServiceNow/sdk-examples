<template>
    <div class="incident-app">
        <header class="app-header">
            <h1>Incident Response Manager</h1>
            <button class="create-button" @click="handleCreateClick">Create New Incident</button>
        </header>

        <div v-if="error" class="error-message">
            {{ error }}
            <button @click="error = null">Dismiss</button>
        </div>

        <div v-if="loading" class="loading">Loading...</div>

        <IncidentList
            v-else
            :incidents="incidents"
            :onEdit="handleEditClick"
            :onRefresh="refreshIncidents"
            :service="incidentService"
        />

        <IncidentForm
            v-if="showForm"
            :incident="selectedIncident"
            :onSubmit="handleFormSubmit"
            :onCancel="handleFormClose"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Incident } from './types'
import { IncidentService } from './services/IncidentService'
import IncidentList from './components/IncidentList.vue'
import IncidentForm from './components/IncidentForm.vue'
import './app.css'

const incidents = ref<Incident[]>([])
const loading = ref<boolean>(true)
const showForm = ref<boolean>(false)
const selectedIncident = ref<Incident | null>(null)
const error = ref<string | null>(null)

const incidentService = new IncidentService()

const refreshIncidents = async (): Promise<void> => {
    try {
        loading.value = true
        error.value = null
        const data = await incidentService.list()
        incidents.value = data
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err)
        error.value = `Failed to load incidents: ${message}`
        console.error(err)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    refreshIncidents()
})

const handleCreateClick = () => {
    selectedIncident.value = null
    showForm.value = true
}

const handleEditClick = (incident: Incident): void => {
    selectedIncident.value = incident
    showForm.value = true
}

const handleFormClose = () => {
    showForm.value = false
    selectedIncident.value = null
}

import type { IncidentPayload } from './types'

const handleFormSubmit = async (formData: IncidentPayload): Promise<void> => {
    loading.value = true
    try {
        if (selectedIncident.value) {
            const sysId =
                typeof selectedIncident.value.sys_id === 'object'
                    ? selectedIncident.value.sys_id.value
                    : selectedIncident.value.sys_id
            await incidentService.update(sysId, formData)
        } else {
            await incidentService.create(formData)
        }
        showForm.value = false
        await refreshIncidents()
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err)
        error.value = `Failed to save incident: ${message}`
        console.error(err)
    } finally {
        loading.value = false
    }
}
</script>
