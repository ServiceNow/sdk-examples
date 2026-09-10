import React, { useState, useEffect, useRef } from 'react'
import type { Incident, IncidentInput } from '../types'
import { Modal, type FooterAction } from '@servicenow/react-components/Modal'
import { Input } from '@servicenow/react-components/Input'
import { Textarea } from '@servicenow/react-components/Textarea'
import { Select, type SelectItem } from '@servicenow/react-components/Select'
import {t} from 'sn-translate';

const statusItems: SelectItem[] = [
    { id: 'new', label: t('New') },
    { id: 'in_progress', label: t('In Progress') },
    { id: 'on_hold', label: t('On Hold') },
    { id: 'resolved', label: t('Resolved') },
    { id: 'closed', label: t('Closed') },
]

const priorityItems: SelectItem[] = [
    { id: '1', label: t('1 - Critical') },
    { id: '2', label: t('2 - High') },
    { id: '3', label: t('3 - Moderate') },
    { id: '4', label: t('4 - Low') },
]

interface IncidentFormProps {
    incident: Incident | null
    onSubmit: (formData: IncidentInput) => void
    onCancel: () => void
}

export default function IncidentForm({ incident, onSubmit, onCancel }: IncidentFormProps) {
    const isEditing = !!incident

    const submittedRef = useRef(false)

    const [formData, setFormData] = useState<IncidentInput>({
        short_description: '',
        description: '',
        status: 'new',
        priority: '3',
    })

    // Load incident data if editing
    useEffect(() => {
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
    }, [incident])

    const handleFooterAction = (e: { detail: { payload: { action: FooterAction } } }) => {
        // Guard: prevent the deferred onOpenedSet callback from also firing
        submittedRef.current = true
        const variant = e.detail?.payload?.action?.variant
        if (variant === 'primary') {
            onSubmit(formData)
        } else {
            onCancel()
        }
    }

    return (
        <Modal
            opened
            size="lg"
            headerLabel={isEditing ? 'Edit Incident' : 'Create New Incident'}
            footerActions={[
                { label: 'Cancel', variant: 'secondary' },
                { label: isEditing ? 'Update' : 'Create', variant: 'primary' },
            ]}
            onOpenedSet={() => {
                // Defer so onFooterActionClicked has a chance to fire first
                // when a footer button auto-closes the modal
                setTimeout(() => {
                    if (!submittedRef.current) onCancel()
                }, 0)
            }}
            onFooterActionClicked={(e) => {
                handleFooterAction(e);
            }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Input
                    label="Short Description"
                    name="short_description"
                    value={formData.short_description}
                    required
                    maxlength={160}
                    onInput={(e) => {
                        setFormData((prev) => ({ ...prev, short_description: e.detail.payload.fieldValue }))
                    }}
                />

                <Textarea
                    label="Description"
                    name="description"
                    value={formData.description}
                    rows={4}
                    maxlength={4000}
                    onInput={(e) => {
                        setFormData((prev) => ({ ...prev, description: e.detail.payload.fieldValue }))
                    }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <Select
                        style={{ width: '100%' }}
                        label="Status"
                        items={statusItems}
                        selectedItem={formData.status}
                        onSelectedItemSet={(e) => {
                            setFormData((prev) => ({ ...prev, status: String(e.detail.payload.value) }))
                        }}
                    />

                    <Select
                        style={{ width: '100%' }}
                        label="Priority"
                        items={priorityItems}
                        selectedItem={formData.priority}
                        onSelectedItemSet={(e) => {
                            setFormData((prev) => ({ ...prev, priority: String(e.detail.payload.value) }))
                        }}
                    />
                </div>
            </div>
        </Modal>
    )
}
