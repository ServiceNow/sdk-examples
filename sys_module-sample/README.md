# Simple Sys Module Sample

These examples show techniques for working with `sys_module` records: wrapping compiled modules in script includes, referencing script includes and global-scope APIs from server modules, and pulling in third-party npm packages.

## Fluent: Script Includes ([src/fluent](src/fluent))

### Expose a compiled module as a script include

[`script-include-module-one.now.ts`](src/fluent/script-include-module-one.now.ts) wraps a compiled server module in a `ScriptInclude()` so it can be called like a traditional script include, including cross-scope. Modules are currently blocked from being called by other scopes, and this is a workaround to exposing them if needed.

```javascript
var sample = new SampleClass()
sample.getTestOne()
```

### Register a plain-JS script include

[`my-script-include.ts`](src/fluent/my-script-include.ts) registers a `ScriptInclude()` whose implementation is a traditional `Class.create()`-style script ([`my-script-include.js`](src/fluent/my-script-include.js)), using `Now.include` to bring in the script body.

## Server modules ([src/server](src/server))

### Call a script include from a server module

[`use-script-include-sample.ts`](src/server/use-script-include-sample.ts) imports a script include defined in your own application scope via `@servicenow/glide/{scope}` and calls it from TypeScript.

```typescript
import { MyScriptInclude } from '@servicenow/glide/x_sysmodulesample'

const scriptInclude = new MyScriptInclude()
scriptInclude.helloWorld()
```

### Use global-scope APIs from a server module

[`sample-script-include-import.ts`](src/server/sample-script-include-import.ts) imports from `@servicenow/glide/global` to reach global-scope classes (e.g. `DateTimeUtils`) script includes from a sys module.

### Use a third-party npm package

[`tpm-sample.ts`](src/server/tpm-sample.ts) shows using a third-party library (`date-fns`) inside a server-side module.
