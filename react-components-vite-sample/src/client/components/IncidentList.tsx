import React from 'react'
import { NowRecordListConnected } from '@servicenow/react-components/NowRecordListConnected'
import type { NowRecordListConnectedRowClicked } from '@servicenow/react-components/NowRecordListConnected'

const TABLE_NAME = 'x_rcvitesample_incident'
const COLUMNS = 'number,short_description,status,priority,opened_at'

interface IncidentListProps {
    onRowClicked?: NowRecordListConnectedRowClicked
    onNewClicked?: () => void
}

export default function IncidentList({ onRowClicked, onNewClicked }: IncidentListProps) {
    return (
        <NowRecordListConnected
            table={TABLE_NAME}
            listTitle="Incidents"
            columns={COLUMNS}
            hideInlineEditing
            hideQuickEdit
            hideRowSelector
            hideHeader
            onRowClicked={onRowClicked}
            onNewActionClicked={onNewClicked ? () => onNewClicked() : undefined}
        />
    )
}
