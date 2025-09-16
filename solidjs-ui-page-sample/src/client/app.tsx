import { createSignal, createEffect, onMount, Show } from 'solid-js'
import { IncidentService } from './services/IncidentService'
import IncidentList from './components/IncidentList'
import IncidentForm from './components/IncidentForm'
import './app.css'

export default function App() {
    const [incidents, setIncidents] = createSignal([])
    const [loading, setLoading] = createSignal(true)
    const [showForm, setShowForm] = createSignal(false)
    const [selectedIncident, setSelectedIncident] = createSignal(null)
    const [error, setError] = createSignal(null)

    const incidentService = new IncidentService()

    const refreshIncidents = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await incidentService.list()
            setIncidents(data)
        } catch (err) {
            setError('Failed to load incidents: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    onMount(() => {
        void refreshIncidents()
    })

    const handleCreateClick = () => {
        setSelectedIncident(null)
        setShowForm(true)
    }

    const handleEditClick = (incident) => {
        setSelectedIncident(incident)
        setShowForm(true)
    }

    const handleFormClose = () => {
        setShowForm(false)
        setSelectedIncident(null)
    }

    const handleFormSubmit = async (formData) => {
        setLoading(true)
        try {
            const incident = selectedIncident()
            if (incident) {
                const sysId =
                    typeof incident.sys_id === 'object'
                        ? incident.sys_id.value
                        : incident.sys_id
                await incidentService.update(sysId, formData)
            } else {
                await incidentService.create(formData)
            }
            setShowForm(false)
            await refreshIncidents()
        } catch (err) {
            setError('Failed to save incident: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div class="incident-app">
            <header class="app-header">
                <h1>Incident Response Manager</h1>
                <button class="create-button" onClick={handleCreateClick}>
                    Create New Incident
                </button>
            </header>

            <Show when={error()}>
                <div class="error-message">
                    {error()}
                    <button onClick={() => setError(null)}>Dismiss</button>
                </div>
            </Show>

            <Show when={loading()} fallback={
                <IncidentList
                    incidents={incidents()}
                    onEdit={handleEditClick}
                    onRefresh={refreshIncidents}
                    service={incidentService}
                />
            }>
                <div class="loading">Loading...</div>
            </Show>

            <Show when={showForm()}>
                <IncidentForm incident={selectedIncident()} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
            </Show>
        </div>
    )
}