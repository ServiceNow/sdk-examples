var MyScriptInclude = Class.create()
MyScriptInclude.prototype = {
    initialize: function () {},

    example: function () {
        //example of using another script include and getting type information
        const processor = new global.AbstractAjaxProcessor()
        gs.info('This is an example script include method')
    },

    exampleWithEmptyScriptInclude: function () {
        //example of importing/using an empty script include defined in this same app scope
        const empty = new EmptyScriptInclude()
        gs.info('Instantiated EmptyScriptInclude')
    },

    type: 'MyScriptInclude',
}
