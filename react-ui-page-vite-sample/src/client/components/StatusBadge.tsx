import React from 'react'
import styles from './StatusBadge.module.css'

const statusClasses: Record<string, string | undefined> = {
    new: styles.new,
    in_progress: styles.inProgress,
    on_hold: styles.onHold,
    resolved: styles.resolved,
    closed: styles.closed,
}

interface StatusBadgeProps {
    /** Raw status value, e.g. "new", "in_progress" */
    status: string
    /** Human-readable label shown inside the badge */
    label: string
}

/**
 * Example component that uses CSS Modules.
 *
 * Importing `*.module.css` returns a mapping of local class names to unique,
 * hashed identifiers so styles never collide with other components.
 */
export default function StatusBadge({ status, label }: StatusBadgeProps) {
    const variant = statusClasses[status] ?? ''
    return <span className={`${styles.badge} ${variant}`}>{label}</span>
}
