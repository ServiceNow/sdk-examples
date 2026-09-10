import React, { Suspense, useState, useMemo, useCallback } from 'react'
import { IncidentService } from './services/IncidentService'
import IncidentList from './components/IncidentList'
const IncidentForm = React.lazy(() => import('./components/IncidentForm'))
import logoUrl from './assets/logo.svg'
import { errorMessage } from './utils/errors'
import type { Incident, IncidentInput } from './types'
import { Button } from '@servicenow/react-components/Button'
import { Heading } from '@servicenow/react-components/Heading'
import { Alert } from '@servicenow/react-components/Alert'
import { Loader } from '@servicenow/react-components/Loader'
import './app.css'

export default function App() {
    const [showForm, setShowForm] = useState(false)
    const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [listKey, setListKey] = useState(0)

    const incidentService = useMemo(() => new IncidentService(), [])

    const handleCreateClick = () => {
        setSelectedIncident(null)
        setShowForm(true)
    }

    const openEditModal = useCallback(async (sysId: string) => {
        try {
            const incident = await incidentService.get(sysId)
            if (!incident) {
                setError('Incident not found')
                return
            }
            setSelectedIncident(incident)
            setShowForm(true)
        } catch (err) {
            setError('Failed to load incident: ' + errorMessage(err))
            console.error(err)
        }
    }, [incidentService])

    const handleRowClicked = useCallback(async (e: any) => {
        const sysId = e.detail?.payload?.sys_id
        if (!sysId) return
        openEditModal(sysId)
    }, [openEditModal])

    const handleFormClose = () => {
        setShowForm(false)
        setSelectedIncident(null)
    }

    const handleFormSubmit = async (formData: IncidentInput) => {
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
            setSelectedIncident(null)
            setListKey((prev) => prev + 1)
        } catch (err) {
            setError('Failed to save incident: ' + errorMessage(err))
            console.error(err)
        }
    }

    return (
        <div className="incident-app">
            <header className="app-header">
                <div className="app-header-left">
                    <img src={logoUrl} alt="IRM Logo" className="app-logo" width="40" height="40" />
                    <Heading label="Incident Response Manager" level={1} variant="header-secondary" hasNoMargin />
                </div>
                <Button variant="primary" label="Create New Incident" icon="plus-fill" onClicked={handleCreateClick} />
            </header>

            {error && (
                <Alert
                    status="critical"
                    content={error}
                    action={{ type: 'dismiss' }}
                    onActionClicked={() => setError(null)}
                />
            )}

            <IncidentList key={listKey} onRowClicked={handleRowClicked} onNewClicked={handleCreateClick} />

            {showForm && (
                <Suspense
                    fallback={
                        <div className="loading-container">
                            <Loader label="Loading form..." />
                        </div>
                    }
                >
                    <IncidentForm incident={selectedIncident} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
                </Suspense>
            )}
        </div>
    )
}
