import React, { Suspense, useState, useEffect, useMemo } from 'react'
import { IncidentService } from './services/IncidentService'
import IncidentList from './components/IncidentList'
const IncidentForm = React.lazy(() => import('./components/IncidentForm'))
import logoUrl from './assets/logo.svg'
import { errorMessage } from './utils/errors'
import type { Incident, IncidentInput } from './types'
import './app.css'

export default function App() {
    const [incidents, setIncidents] = useState<Incident[]>([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null)
    const [error, setError] = useState<string | null>(null)

    const incidentService = useMemo(() => new IncidentService(), [])

    const refreshIncidents = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await incidentService.list()
            setIncidents(data)
        } catch (err) {
            setError('Failed to load incidents: ' + errorMessage(err))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        void refreshIncidents()
    }, [])

    const handleCreateClick = () => {
        setSelectedIncident(null)
        setShowForm(true)
    }

    const handleEditClick = (incident: Incident) => {
        setSelectedIncident(incident)
        setShowForm(true)
    }

    const handleFormClose = () => {
        setShowForm(false)
        setSelectedIncident(null)
    }

    const handleFormSubmit = async (formData: IncidentInput) => {
        setLoading(true)
        try {
            if (selectedIncident) {
                const sysId =
                    typeof selectedIncident.sys_id === 'object'
                        ? selectedIncident.sys_id.value
                        : selectedIncident.sys_id
                await incidentService.update(sysId, formData)
            } else {
                await incidentService.create(formData)
            }
            setShowForm(false)
            await refreshIncidents()
        } catch (err) {
            setError('Failed to save incident: ' + errorMessage(err))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="incident-app">
            <header className="app-header">
                <img src={logoUrl} alt="IRM Logo" className="app-logo" width="40" height="40" />
                <h1>Incident Response Manager</h1>
                <button className="create-button" onClick={handleCreateClick}>
                    Create New Incident
                </button>
            </header>

            {error && (
                <div className="error-message">
                    {error}
                    <button onClick={() => setError(null)}>Dismiss</button>
                </div>
            )}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <IncidentList
                    incidents={incidents}
                    onEdit={handleEditClick}
                    onRefresh={refreshIncidents}
                    service={incidentService}
                />
            )}

            {showForm && (
                <Suspense fallback={<div className="loading">Loading form...</div>}>
                    <IncidentForm incident={selectedIncident} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
                </Suspense>
            )}
        </div>
    )
}
