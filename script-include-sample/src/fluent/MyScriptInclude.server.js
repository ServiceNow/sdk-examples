var MyScriptInclude = Class.create()
MyScriptInclude.prototype = {
    initialize: function () {},

    example: function () {
        //example of using another script include and getting type information
        const processor = new global.AbstractAjaxProcessor()
        gs.info('This is an example script include method')
    },

    type: 'MyScriptInclude',
}
