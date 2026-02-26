function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return
    var justification = g_form.getValue('justification')
    if (!justification) {
        if (newValue === 'performance') {
            g_form.setValue('justification', 'High-performance laptop needed for: ')
        } else if (newValue === 'ultrabook') {
            g_form.setValue('justification', 'Executive ultrabook requested for: ')
        }
    }
}
