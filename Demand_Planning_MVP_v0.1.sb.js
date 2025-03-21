/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 * Demand Planning MVP - A prototype to collect feedback for future demand planning improvements.
 */
define(['N/ui/serverWidget', 'N/search', 'N/runtime', 'N/record'], function(ui, search, runtime, record) {
    
    function onRequest(context) {
        // GET: Render the initial form with instructions and sample forecast data.
        if (context.request.method === 'GET') {
            // Create the main form
            var form = ui.createForm({
                title: 'Demand Planning MVP'
            });
            
            // === PHASE 1: Introductory Instructions ===
            // Provide clear instructions for operations folks to understand the prototype.
            var instructionsField = form.addField({
                id: 'custpage_instructions',
                type: ui.FieldType.INLINEHTML,
                label: 'Instructions'
            });
            instructionsField.defaultValue = '<h2>Welcome to the Demand Planning MVP</h2>' +
                '<p>This prototype allows you to review sample forecast data and submit forecast adjustments for review.</p>' +
                '<p>(Phase 1) The data displayed below is static and for demonstration purposes only. ' +
                'Future phases will integrate real forecast data, automated recalculation features, and more.</p>';
            
            // === PHASE 1: Display a Forecast Data Sublist ===
            // A static sublist with sample items. In a production version, dynamic data could be populated via saved searches.
            var sublist = form.addSublist({
                id: 'custpage_forecast_sublist',
                type: ui.SublistType.LIST,
                label: 'Forecast Data'
            });
            
            // Define the columns for the sublist.
            sublist.addField({
                id: 'custpage_item',
                type: ui.FieldType.TEXT,
                label: 'Item'
            });
            sublist.addField({
                id: 'custpage_currentforecast',
                type: ui.FieldType.FLOAT,
                label: 'Current Forecast'
            });
            sublist.addField({
                id: 'custpage_adjustedforecast',
                type: ui.FieldType.FLOAT,
                label: 'Adjusted Forecast'
            });
            
            // Populate the sublist with sample data.
            sublist.setSublistValue({
                id: 'custpage_item',
                line: 0,
                value: 'Item A'
            });
            sublist.setSublistValue({
                id: 'custpage_currentforecast',
                line: 0,
                value: '150'
            });
            sublist.setSublistValue({
                id: 'custpage_adjustedforecast',
                line: 0,
                value: '150'
            });
            
            sublist.setSublistValue({
                id: 'custpage_item',
                line: 1,
                value: 'Item B'
            });
            sublist.setSublistValue({
                id: 'custpage_currentforecast',
                line: 1,
                value: '250'
            });
            sublist.setSublistValue({
                id: 'custpage_adjustedforecast',
                line: 1,
                value: '250'
            });
            
            // === PHASE 2 (Hint for Future Enhancements): Auto Recalculation Option ===
            // This checkbox is a placeholder for a future feature to automatically recalculate the forecast
            var autoComputeField = form.addField({
                id: 'custpage_autocompute',
                type: ui.FieldType.CHECKBOX,
                label: 'Enable Auto Recalculation?'
            });
            autoComputeField.defaultValue = 'F';
            
            // Add the submit button to capture any forecast adjustments.
            form.addSubmitButton({
                label: 'Submit Forecast Adjustments'
            });
            
            // Render the form.
            context.response.writePage(form);
        }
        // POST: Process the submitted data (Note: For this MVP, we simply show a confirmation).
        else if (context.request.method === 'POST') {
            // In a full implementation, you would read the submitted forecast adjustments and process them.
            // Keep in mind that sublist values aren’t directly available in the POST context without some work-arounds
            // (like client-side scripting to collect those values). This prototype will simulate a successful submission.
            
            // Create a result form to show confirmation.
            var form = ui.createForm({
                title: 'Demand Planning MVP - Submission Confirmation'
            });
            
            var confirmField = form.addField({
                id: 'custpage_confirm',
                type: ui.FieldType.INLINEHTML,
                label: 'Confirmation'
            });
            confirmField.defaultValue = '<div style="font-size:14px; color:green;">' +
                'Your forecast adjustments have been received. This is a prototype confirmation only.' +
                '</div>';
            
            // Provide a back button to return to the main prototype form.
            form.addButton({
                id: 'custpage_back',
                label: 'Back',
                functionName: 'goBack'
            });
            
            // Attach a client script to handle the "Back" button functionality.
            // Create a corresponding client script (for example, "DemandPlanningMVP_Client.js")
            // and deploy it along with this Suitelet.
            form.clientScriptModulePath = 'SuiteScripts/DemandPlanningMVP_Client.js';
            
            context.response.writePage(form);
        }
    }
    
    return {
        onRequest: onRequest
    };
});