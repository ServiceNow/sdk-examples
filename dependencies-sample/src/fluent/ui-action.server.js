function openItemInCatalogBuilder() {
    var checkoutUtil = new GlideAjax('ServiceCatalogVersioningUtils')
    checkoutUtil.addParam('sysparm_name', 'checkoutItem')
    checkoutUtil.addParam('itemId', g_form.getUniqueValue())
    checkoutUtil.getXMLAnswer(navigateToBuilder)
}

function navigateToBuilder(url) {
    if (url) {
        g_navigation.openPopup(url)
        g_navigation.reloadWindow()
    }
}
