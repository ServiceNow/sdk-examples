/** g_form is a global object used in client-side scripts to customize forms */
declare interface g_form {
    /** Adds an icon on a field’s label. This method is available starting with the Fuji release */
    addDecoration(fieldName: string, icon: string, title: string): void
    /** Displays an error message at the top of the form */
    addErrorMessage(message: string): void
    /** Displays an informational message at the top of the form */
    addInfoMessage(message: string): void
    /** Adds a choice to a choice list field If the index is not specified, the choice is added to the end of the list. Optional: Use the index field to specify a particular place in the list */
    addOption(fieldName: string, choiceValue: string, choiceLabel: string): void
    /** Removes messages that were previously added with addErrorMessage() and addInfoMessage() */
    clearMessages(): void
    /** Removes all options from a choice list */
    clearOptions(fieldName: string): void
    /** Removes any value(s) from the specified field */
    clearValue(fieldName: string): void
    /** Prevents new file attachments from being added Hides the paperclip icon. See also: enableAttachments() */
    disableAttachments(): void
    /** Allows new file attachments to be added Shows the paperclip icon. See also: disableAttachments() */
    enableAttachments(): void
    /** Flashes the specified color the specified number of times in the field. Used to draw attention to a particular field */
    flash(widgetName: string, color: string, count: number): void
    /** Returns the most recent action name or, for a client script, the sys_id of the UI Action clicked Note: not available to Wizard Client Scripts */
    getActionName(): string
    /** Returns false if the field's value is false or undefined, otherwise true is returned. Useful with checkbox fields Returns true when the checkbox is checked */
    getBooleanValue(fieldName: string): boolean
    /** Returns the HTML element for the specified field Compound fields may contain several HTML elements. Generally not necessary as there are built-in methods that use the fields on the form */
    getControl(fieldName: string): HTMLElement
    /** Returns the decimal value of the specified field */
    getDecimalValue(fieldName: string): string
    /** Returns the HTML element for the field specified via the ID Compound fields may contain several HTML elements. Generally not necessary as there are built-in methods that use the fields on the form */
    getElement(id: string): HTMLElement
    /** Returns the HTML element for the form */
    getFormElement(): HTMLElement
    /** Returns the value of the specified field as an integer An empty value returns 0 */
    getIntValue(fieldName: string): number
    /** Gets the plain text value of the field label. This method is available starting with the Fuji release */
    getLabelOf(fieldName: string): string
    /** Returns the <option> element for a select box named fieldName and where choiceValue matches the option value Returns null if the field is not found or the option is not found */
    getOption(fieldName: string, choiceValue: string): HTMLElement
    /** Returns the GlideRecord for a specified field getReference() accepts a second parameter, a callback function Warning: This requires a call to the server so using this function will require additional time and may introduce latency to your page */
    getReference(fieldName: string, callback: string): string
    /** Returns all section names, whether visible or not, in an array This method is available starting with the Fuji release */
    getSectionNames(): string
    /** Returns the elements for the form's sections in an array */
    getSections(): string
    /** Returns the name of the table this record belongs to */
    getTableName(): string
    /** Returns the sys_id of the record displayed in the form */
    getUniqueValue(): string
    /** Returns the value of the specified field */
    getValue(fieldName: string): string
    /** Hides all field messages. <type> paramter is optional */
    hideAllFieldMsgs(type: string): void
    /** Hides the error message placed by showErrorBox() */
    hideErrorBox(input: string): void
    /** Hides the message placed by showFieldMsg() */
    hideFieldMsg(input: string, clearAll: boolean): void
    /** Hides the specified related list on the form */
    hideRelatedList(listTableName: string): void
    /** Hides all related lists on the form */
    hideRelatedLists(): void
    /** Returns true if the field is required Returns false if the field is optional */
    isMandatory(fieldName: string): boolean
    /** Returns true if the record has never been saved Returns false if the record has been saved */
    isNewRecord(): boolean
    /** Returns true if the section is visible Returns false if the section is not visible or does not exist. This method is available starting with the Fuji release */
    isSectionVisible(sectionName: string): boolean
    /** Removes the icon that matches the exact same name and text. This method is available starting with the Fuji release */
    removeDecoration(fieldName: string, icon: string, title: string): void
    /** Removes a specific option from a choice list */
    removeOption(fieldName: string, choiceValue: string): void
    /** Saves the record without navigating away from the record (update and stay) */
    save(): void
    /** Grays out field and makes it unavailable */
    setDisabled(fieldName: string, value: boolean): void
    /** Displays the field if true. Hides the field if false. This method cannot hide mandatory fields with no value. If the field is hidden, the space is used to display other items */
    setDisplay(fieldName: string, display: boolean): void
    /** Sets the plain text value of the field label. This method is available starting with the Fuji release */
    setLabelOf(fieldname: string, label: string): void
    /** Makes the field required if true. Makes the field optional if false. Best Practice: Use UI Policy rather than this method whenever possible  */
    setMandatory(fieldName: string, value: boolean): void
    /** Makes the field read-only if true Makes the field editable if false. Note: Both setReadOnly and setReadonly are functional.  Best Practice: Use UI Policy rather than this method whenever possible */
    setReadOnly(fieldName: string, value: boolean): void
    /** Shows or hides a section Works in both tab and flat modes. This method is available starting with the Fuji release */
    setSectionDisplay(sectionName: string, display: boolean): boolean
    /** Sets the value and the display value of a field Will display value if there is no displayValue */
    setValue(fieldName: string, value: string, displayValue: string): void
    /** Displays the field if true. Hides the field if false. If the field is hidden, the space is left blank. This method cannot hide mandatory fields with no value */
    setVisible(fieldName: string, display: boolean): void
    /** Displays an error message under the specified form field (either a control object or the name of the field). If the control or field is currently scrolled off the screen, it will be scrolled to. A global property (glide.ui.scroll_to_message_field) is available that controls automatic message scrolling when the form field is offscreen (scrolls the form to the control or field). The showFieldMsg() method is a similar method that requires a 'type' parameter */
    showErrorBox(input: string, message: string, scrollForm: boolean): void
    /** Displays either an informational or error message under the specified form field (either a control object or the name of the field). Type may be either 'info' or 'error.' If the control or field is currently scrolled off the screen, it will be scrolled to. A global property (glide.ui.scroll_to_message_field) is available that controls automatic message scrolling when the form field is offscreen (scrolls the form to the control or field) */
    showFieldMsg(input: string, message: string, type: string, scrollForm: boolean): void
    /** Displays the specified related list on the form */
    showRelatedList(listTableName: string): void
    /** Displays all related lists on the form */
    showRelatedLists(): void
    /** Saves the record User will be taken away from the form, returning them to where they were previously */
    submit(): void
    /** Returns a boolean value representing whether the server side script in this form should use latest es rules when validating */
    useEsLatest(): boolean
    /** Handles the visibility of the es latest toggle in UI Action forms when the client field changes */
    handleEsLatestVisibilty(): void
}
declare const g_form: g_form

/** Navigation API. Note: The code in this file is compatible with API Level 1 and API Level 2 */
declare interface g_navigation {
    /** Redirects to another URL.
     * url: URL to be loaded. It can be any URL supported by the browser
     * target: is the target frame. If left blank, the URL will load in the current frame */
    open(url: string, target: string): void
    /** Open a popup window with features
   * url: The url to open name: The name of the new window
   * features: is a comma separated list of features. See https://developer.mozilla.org/en-US/docs/Web/API/Window/open noStack: True to append sysparm_stack=no to the url. This prevents weirdness when using the form back button
   * returns the instance of newly opened Window */
    openPopup(url: string, name: string, features: string, noStack: boolean): any
    /** Redirects to a record */
    openRecord(table: string, sys_id: string): void
    /** Reload the current frame */
    reloadWindow(): void
    /** Refresh the navigator contents */
    refreshNavigator(): void
}
declare const g_navigation: g_navigation

/** Constructor to create a new dialog window object in the current window and frame. id is the name of the UI page to load into the dialog window */
declare class GlideDialogWindow {
    /** Closes the dialog window */
    destroy(): void
    /** Renders the dialog window */
    render(): void
    /** Sets a given window property to a specified value. Any window property can be set using this method */
    setPreference(name: string, value: string): void
    /** Sets the size of the dialog window. If you do not pass width and height parameters, a default size is used */
    setSize(width: number, height: number): void
    /** Sets the title of the dialog window */
    setTitle(title: string): void

    constructor(id: string)
}

/** g_list is a global object used in client-side scripts to customize lists */
declare interface g_list {
    /** Adds a single term to the list query filter */
    addFilter(filter: string): queryCondition
    /** Returns the GlideList2 object for the list or for the list that contains the specified item. String listID or DOMElement element - specifies the list by list ID or specifies the list by element */
    get(listID: string, element: DOMElement): GlideList2
    /** Returns a comma-separated list of the sys_ids for the items that are checked in the list */
    getChecked(): string
    /** Returns the sysparm_fixed query. A fixed query is the part of the query that cannot be removed from the breadcrumb (i.e., it is fixed for the user). It is specified by including a 'sysparm_fixed_query parameter' for the application module */
    getFixedQuery(): string
    /** Returns the field or comma-separated list of fields that are used to group the list */
    getGroupBy(): string
    /** Returns the name of the list, which is usually the table name */
    getListName(): string
    /** Returns the first field that is used to order by or a blank */
    getOrderBy(): string
    /** Returns the name of the parent table for a related list (the table associated with the form) */
    getParentTable(): string
    /** Returns the encoded query string for the list */
    getQuery(orderBy: boolean, groupBy: boolean, fixed: boolean, all: boolean): string
    /** Returns the related list field that associates the related list to the parent form */
    getRelated(): string
    /** Returns the table name for the list */
    getTableName(): string
    /** Returns the list title */
    getTitle(): string
    /** Returns the view used to display the list */
    getView(): string
    /** Returns true if the list has been personalized by the user by choosing the list mechanic and changing the list layout */
    isUserList(): boolean
    /** Refreshes the list. The orderBy part of the list filter is ignored so that the list uses its natural ordering when it is refreshed */
    refresh(firstRow: number, additionalParms: string): void
    /** Refreshes the list. The orderBy part of the list filter is included if it is currently specified for the list */
    refreshWithOrderBy(firstRow: number, additionalParms: string): void
    /** Sets the encoded query string for the list, ignoring the orderBy and groupBy parts of the query string */
    setFilter(filter: string): void
    /** Sets the encoded query string for the list, including the orderBy and groupBy if specified, and then refreshes the list using the new filter */
    setFilterAndRefresh(filter: string): void
    /** Sets the first row that will be displayed in the list when the list is refreshed */
    setFirstRow(rowNum: number): void
    /** Sets the groupBy criteria for the list, for a single field or multiple fields. For a single field, use field or groupByField. The groupBy prefix is optional. For multiple fields use field1^field2^field3 or groupByField1^groupByField2^groupByField3 */
    setGroupBy(groupBy: string): void
    /** Sets the orderBy criteria for the list. For a single order by field use orderBy field or orderByDescField. For multiple fields, use orderByField1^orderByField2^orderByField3. orderBy specifies ascending order and orderByDesc specifies descending. These prefix strings are optional. If not specified orderBy is assumed */
    setOrderBy(orderBy: string): void
    /** Sets the number of rows per page to display */
    setRowsPerPage(rows: number): void
    /** Displays or hides all of the groups within the list and saves the current collapsed/expanded state of the groups as a user preference */
    showHideGroups(showFlag: boolean): void
    /** Displays or hides the list and saves the current collapsed/expanded state of the list as a user preference */
    showHideList(showFlag: boolean): void
    /** Sorts the list in ascending order and saves the choice */
    sort(field: string): void
    /** Sorts the list in descending order and saves the choice */
    sortDescending(field: string): void
    /** Toggles the display of the list and saves the current collapsed/expanded state of the list as a user preference */
    toggleList(): void
    /** Clears the image for an item */
    toggleListNoPref(): void
}
declare const g_list: g_list

/** Client-side GlideRecord enables the use of some GlideRecord functionality inside client-side scripts, such as client scripts and UI policy scripts. Note: Precautions should be made to ensure that queries are optimized and that they do not run synchronously */
declare class GlideRecord {
    /** Adds a column to order by in the query */
    addOrderBy(column: string): void
    /** Adds a filter to return records based on 1,2 or 3 arguments */
    addQuery(fieldName: string, operator: string, value: string): void
    /** Deletes a single record */
    deleteRecord(responseFunction: string): boolean
    /** Executes a GlideRecord query for a record with the specified sys_id */
    get(sys_id: string): boolean
    /** Gets the encoded query as a string */
    getEncodedQuery(): string
    /** Gets the limit of records to be returned by the GlideRecord query */
    getLimit(): number
    /** Retrieves the table name associated with this GlideRecord */
    getTableName(): string
    /** Determines if there are any more records in the GlideRecord */
    hasNext(): boolean
    /** Inserts a new record using the field values that have been set for the current record */
    insert(responseFunction): string
    /** Moves to the next record in the GlideRecord */
    next(): boolean
    /** Specifies and orderBy column (this may be called more than once to order by multiple columns) */
    orderBy(column: string): void
    /** Runs the query against the table based on the addQuery() filter */
    // eslint-disable-next-line @typescript-eslint/ban-types
    query(responseFunction: Function): void
    /** Sets the limit for how many records will be returned by the GlideRecord query */
    setLimit(maxQuery: number): void
    /** Update the record with an optional responseFunction handler */
    update(responseFunction: string): void

    constructor(tableName: string)
}

/** g_user is a global object used in client-side scripts, to get current user information */
declare interface g_user {
    firstName: string
    lastName: string
    userID: string
    userName: string
    /** Gets information for use in client scripts without making an AJAX call to the server. Works with gs.getSession().putClientData(,) */
    getClientData(key: string): string
    /** Returns the first and last name of the current user */
    getFullName(): string
    /** Returns true if the current user has the selected role or the admin role */
    hasRole(role: string): boolean
    /** Returns true only if the current user has this specified role */
    hasRoleExactly(role: string): boolean
    /** Returns true if the current user has at least one of the specified roles in the comma-separated list or the admin role */
    hasRoleFromList(roles: string): boolean
    /** Returns true if the current user has any role */
    hasRoles(): boolean
}
declare const g_user: g_user

/** Retrieves a message from UI Messages */
declare interface getMessage {
    new (key: string)
}
declare const getMessage: getMessage

/** Interact with Service Portal utility functions. */
declare class spUtil {
    /** Update data in the scope by getting it from the server. */
    update(scope: any): void
    /** Call widget on server with data. */
    get(scope: any, data: any): void
    /** Add an info message. */
    addInfoMessage(message: string): void
}

/** The GlideAjax class allows the execution of server-side code from the client. Initialize GlideAjax with the name of the client callable Script Include that extends AbstractAjaxProcessor */
declare class GlideAjax {
    /** Adds parameters to the request, which are read in the Script Include. sysparm_name parameter is used to invoke a function in Script Include */
    addParam(name: string, value: string): void
    /** Makes an asynchronous call to the server. On completion, invokes callback function with response object as an argument */
    getXML(callBackFunction: string): void
    /** Makes an asynchronous call to the server. On completion, invokes callback function with 'answer' value extracted from response object as an argument */
    getXMLAnswer(callbackFunction: string, additionalParams: object, responseParams: object): void

    constructor(scriptIncludeName: string)
}
