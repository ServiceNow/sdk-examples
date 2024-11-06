# Simple Sys Module Sample

These examples show two techniques to call a module cross-scope.

## Expose a class
Sample Class demonstrates creating a server side script to expose and wrap a module in a class so that it can be used similarly to traditional script includes. 

```javascript
var sample = new SampleClass();
sample.getTestOne();
```

## Expose "require" using x_require
Create a script include to expose "require" so that modules can be referenced cross-scope. You will need to modify the `api_name` property to use your application's scope.

Once installed use the script by calling {scope_name}.x_require with the path that you copied from the module in the sys_module table.
```javascript
// ES6+:
const { methodA, propertyB } = x_snc_scope_name.x_require("full/path/of/es_module/in/sys_module/table");

// ES5:
var myModule = x_snc_scope_name.x_require("full/path/of/es_module/in/sys_module/table");
myModule.methodA();
myModule.propertyB;
```
