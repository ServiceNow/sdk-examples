//@ts-expect-error
import { global } from '@servicenow/glide/global'
import { type GlideDateTime, gs } from '@servicenow/glide'

export function globalSample() {
    const dt = new global.DateTimeUtils()
    const gdt = dt.msToGlideDateTime(new Date().getTime()) as GlideDateTime
    gs.info(gdt.getDisplayValue())
}
