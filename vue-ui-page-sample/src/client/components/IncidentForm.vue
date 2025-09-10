<template>
    <div class="form-overlay">
        <div class="form-container">
            <div class="form-header">
                <h2>{{ isEditing ? 'Edit Incident' : 'Create New Incident' }}</h2>
                <button type="button" class="close-button" @click="onCancel">×</button>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="short_description">Short Description *</label>
                    <input
                        type="text"
                        id="short_description"
                        name="short_description"
                        v-model="formData.short_description"
                        required
                        maxlength="160"
                    />
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        v-model="formData.description"
                        rows="5"
                        maxlength="4000"
                    />
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="status">Status</label>
                        <select id="status" name="status" v-model="formData.status">
                            <option value="new">New</option>
                            <option value="in_progress">In Progress</option>
                            <option value="on_hold">On Hold</option>
                            <option value="resolved">Resolved</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="priority">Priority</label>
                        <select id="priority" name="priority" v-model="formData.priority">
                            <option value="1">1 - Critical</option>
                            <option value="2">2 - High</option>
                            <option value="3">3 - Moderate</option>
                            <option value="4">4 - Low</option>
                        </select>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="cancel-button" @click="onCancel">Cancel</button>
                    <button type="submit" class="submit-button">
                        {{ isEditing ? 'Update' : 'Create' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import './IncidentForm.css'
import type { Incident } from '../types'

type FormData = {
    short_description: string
    description: string
    status: string
    priority: string
}

const props = defineProps<{
    incident: Incident | null
    onSubmit: (data: FormData) => void
    onCancel: () => void
}>()

const isEditing = computed(() => !!props.incident)

const formData = reactive<FormData>({
    short_description: '',
    description: '',
    status: 'new',
    priority: '3',
})

watch(
    () => props.incident,
    (incident) => {
        if (incident) {
            formData.short_description =
                typeof incident.short_description === 'object'
                    ? incident.short_description.value
                    : incident.short_description || ''
            formData.description =
                typeof incident.description === 'object' ? incident.description.value : incident.description || ''
            formData.status = typeof incident.status === 'object' ? incident.status.value : incident.status || 'new'
            formData.priority =
                typeof incident.priority === 'object' ? incident.priority.value : incident.priority || '3'
        } else {
            formData.short_description = ''
            formData.description = ''
            formData.status = 'new'
            formData.priority = '3'
        }
    },
    { immediate: true }
)

const handleSubmit = () => {
    props.onSubmit({ ...formData })
}
</script>
