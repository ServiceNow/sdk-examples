var application = new GlideRecord('hr_application')
application.get(application_sys_id)
application.status = 'Rejected'
application.update()
var urlOnStack = GlideSession.get().getStack().bottom()
response.sendRedirect(urlOnStack)
