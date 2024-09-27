/* Example of using a class as Script Include *
* Calling getTestOne() from a different app:
- Set a Cross-Scope-Privilege with SampleClass as the target name
- In the calling app use this code:
import { SampleClass } from '@servicenow/glide/sn_store';
const test = new SampleClass().getTestOne();
*/

export class SampleClass {
    getTestOne() {
        return { test: 'ok-1' }
    }

    getTestTwo() {
        return { test: 'ok-2' }
    }
}
