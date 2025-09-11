import { createSignal, onMount } from 'solid-js'
import './IncidentForm.css'

export default function IncidentForm(props) {
    const isEditing = () => !!props.incident

    const [formData, setFormData] = createSignal({
        short_description: '',
        description: '',
        status: 'new',
        priority: '3',
    })

    onMount(() => {
        const incident = props.incident
        if (incident) {
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
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(formData())
    }

    return (
        <div class="form-overlay">
            <div class="form-container">
                <div class="form-header">
                    <h2>{isEditing() ? 'Edit Incident' : 'Create New Incident'}</h2>
                    <button type="button" class="close-button" onClick={props.onCancel}>
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="short_description">Short Description *</label>
                        <input
                            type="text"
                            id="short_description"
                            name="short_description"
                            value={formData().short_description}
                            onInput={handleChange}
                            required
                            maxLength={160}
                        />
                    </div>

                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData().description}
                            onInput={handleChange}
                            rows={5}
                            maxLength={4000}
                        />
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="status">Status</label>
                            <select id="status" name="status" value={formData().status} onInput={handleChange}>
                                <option value="new">New</option>
                                <option value="in_progress">In Progress</option>
                                <option value="on_hold">On Hold</option>
                                <option value="resolved">Resolved</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="priority">Priority</label>
                            <select id="priority" name="priority" value={formData().priority} onInput={handleChange}>
                                <option value="1">1 - Critical</option>
                                <option value="2">2 - High</option>
                                <option value="3">3 - Moderate</option>
                                <option value="4">4 - Low</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="cancel-button" onClick={props.onCancel}>
                            Cancel
                        </button>
                        <button type="submit" class="submit-button">
                            {isEditing() ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}