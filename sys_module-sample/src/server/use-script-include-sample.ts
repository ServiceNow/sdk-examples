/**Uses import from current app scope to reference the MyScriptInclude in this application */

//@ts-expect-error Don't have type definitions for this import yet, can declare them in your own d.ts file if you want
import { MyScriptInclude } from '@servicenow/glide/x_sysmodulesample'

export const hello = function () {
    const scriptInclude = new MyScriptInclude()
    scriptInclude.helloWorld()
}
