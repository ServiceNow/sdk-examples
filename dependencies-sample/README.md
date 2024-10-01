# Dependencies Sample

This example shows you how to use other tables in your ServiceNow instance as part of your application references. For example you may need to reference a
table from your instance that is not shipped as part of the SDK. To add the schema from these table(s) as a dependency in your application you must edit the
[now.config.json](./now.config.json) file and add a `dependencies` property that specifies these tables you wish to reference.

The `now-sdk dependencies` command can be used to fetch these definitions into your project that you configured in the `now.config.json` file. These definitions will
then be stored under the `src/fluent/generated` folder and automatically imported into your project for use.
