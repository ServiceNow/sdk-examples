# Script Includes Sample

This example shows the the usage of script includes with the now-sdk and how to connect type information and utilize `Now.include`

To update the server typing definitions use `now-sdk dependencies`

Add a [`tsconfig.json`](src/fluent/tsconfig.json) file and [`tsconfig.server.json`](src/fluent/tsconfig.server.json) to connect to the definitions in [@types/servicenow](@types/servicenow/glide.server.d.ts) for `*.server.js` files. The same can be done for any clientside javascript files with a `*.client.js` naming pattern. This can all be configured in the tsconfig files through the `includes` property.

The `now-sdk dependencies` command will also scan `src/fluent/**/*.js` files looking for usages of other script includes and download their definitions to [@types/servicenow/script-includes.server.d.ts](@types/servicenow/script-includes.server.d.ts)

[API Docs](https://docs.servicenow.com/csh?topicname=scripted-rest-api-api-now-ts.html&version=latest)
