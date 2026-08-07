(function (current) {
    var task = new GlideRecord('change_task')
    task.addQuery('change_request', current.sys_id)
    task.addQuery('state', '!=', '3')
    task.setLimit(1)
    task.query()
    return !task.hasNext()
})(current)
