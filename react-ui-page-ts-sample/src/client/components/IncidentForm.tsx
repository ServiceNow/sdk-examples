import React, { useState, useEffect } from 'react'
import './IncidentForm.css'

export default function IncidentForm({ incident, onSubmit, onCancel }) {
    const isEditing = !!incident

    // Initialize form state
    const [formData, setFormData] = useState({
        short_description: '',
        description: '',
        status: 'new',
        priority: '3',
    })

    // Load incident data if editing
    useEffect(() => {
        if (incident) {
            // Extract primitive values from potential objects
            const shortDesc =
                typeof incident.short_description === 'object'
                    ? incident.short_description.value
                    : incident.short_description
            const description =
                typeof incident.description === 'object' ? incident.description.value : incident.description
            const status = typeof incident.status === 'object' ? incident.status.value : incident.status
            const priority = typeof incident.priority === 'object' ? incident.priority.value : incident.priority

            setFormData({
                short_description: shortDesc || '',
                description: description || '',
                status: status || 'new',
                priority: priority || '3',
            })
        }
    }, [incident])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="form-overlay">
            <div className="form-container">
                <div className="form-header">
                    <h2>{isEditing ? 'Edit Incident' : 'Create New Incident'}</h2>
                    <button type="button" className="close-button" onClick={onCancel}>
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="short_description">Short Description *</label>
                        <input
                            type="text"
                            id="short_description"
                            name="short_description"
                            value={formData.short_description}
                            onChange={handleChange}
                            required
                            maxLength={160}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                            maxLength={4000}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select id="status" name="status" value={formData.status} onChange={handleChange}>
                                <option value="new">New</option>
                                <option value="in_progress">In Progress</option>
                                <option value="on_hold">On Hold</option>
                                <option value="resolved">Resolved</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                                <option value="1">1 - Critical</option>
                                <option value="2">2 - High</option>
                                <option value="3">3 - Moderate</option>
                                <option value="4">4 - Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            {isEditing ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
