//Example of using a third party library in a server module

import { format } from 'date-fns'
import { gs, type GlideDateTime } from '@servicenow/glide'

export function formatDate(date: GlideDateTime, dateFormat: string): void {
    const jsDate = new Date(date.getNumericValue())

    gs.info(format(jsDate, dateFormat))
}
