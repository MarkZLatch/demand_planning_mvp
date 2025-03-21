/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 *
 * Minimal client script for the Demand Planning MVP to handle UI functions.
 */
define([], function() {
    /**
     * Entry point function for page initialization.
     * @param {Object} context - Context information provided by NetSuite.
     */
    function pageInit(context) {
        // This function is intentionally left blank.
    }
    
    /**
     * Function to navigate back to the previous page.
     */
    function goBack() {
        history.back();
    }
    
    return {
        pageInit: pageInit,
        goBack: goBack
    };
});