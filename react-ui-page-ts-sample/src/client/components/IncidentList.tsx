import React from 'react'
import './IncidentList.css'

export default function IncidentList({ incidents, onEdit, onRefresh, service }) {
    const handleDelete = async (incident) => {
        if (!confirm('Are you sure you want to delete this incident?')) {
            return
        }

        try {
            const sysId = typeof incident.sys_id === 'object' ? incident.sys_id.value : incident.sys_id
            await service.delete(sysId)
            onRefresh()
        } catch (error) {
            console.error('Failed to delete incident:', error)
            alert('Failed to delete incident: ' + (error.message || 'Unknown error'))
        }
    }

    const getStatusClass = (status) => {
        const statusValue = typeof status === 'object' ? status.value : status

        switch (statusValue) {
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

    const getPriorityClass = (priority) => {
        const priorityValue = typeof priority === 'object' ? priority.value : priority

        switch (priorityValue) {
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

    return (
        <div className="incident-list">
            {incidents.length === 0 ? (
                <div className="no-incidents">No incidents found</div>
            ) : (
                <table>
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
                        {incidents.map((incident) => {
                            // Extract primitive values from potential objects
                            const number =
                                typeof incident.number === 'object' ? incident.number.display_value : incident.number
                            const shortDesc =
                                typeof incident.short_description === 'object'
                                    ? incident.short_description.display_value
                                    : incident.short_description
                            const status =
                                typeof incident.status === 'object' ? incident.status.display_value : incident.status
                            const priority =
                                typeof incident.priority === 'object'
                                    ? incident.priority.display_value
                                    : incident.priority
                            const openedAt =
                                typeof incident.opened_at === 'object'
                                    ? incident.opened_at.display_value
                                    : incident.opened_at

                            return (
                                <tr key={typeof incident.sys_id === 'object' ? incident.sys_id.value : incident.sys_id}>
                                    <td>{number}</td>
                                    <td>{shortDesc}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(incident.status)}`}>
                                            {status}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`priority-badge ${getPriorityClass(incident.priority)}`}>
                                            {priority}
                                        </span>
                                    </td>
                                    <td>{openedAt}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="edit-button"
                                                onClick={() => onEdit(incident)}
                                                aria-label={`Edit incident ${number}`}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="delete-button"
                                                onClick={() => handleDelete(incident)}
                                                aria-label={`Delete incident ${number}`}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}
