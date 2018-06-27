

// Automatically adds event listener for form submit
window.addEventListener('DOMContentLoaded', initAjaxFormHandlers);
function initAjaxFormHandlers() {
    // Only affects forms with this class name
    var ajaxFormClass = 'ezee-ajax-form';
    var ajaxForms = document.getElementsByClassName(ajaxFormClass);
    for(var i = 0; i < ajaxForms.length; i++){
        var form = ajaxForms[i];
        form.addEventListener('submit', ezeeAjaxFormSubmit);
    }
}
function ezeeAjaxFormSubmit(e) {
    // Get form element
    var formElement
    if(e.target) formElement = e.target;
    else if(e.srcElement) formElement = e.srcElement;
    else {
        // NOTE If this can't find the form element, it won't have any effect.
        console("Couldn't find form element from event.");
        return;
    }

    // Stop form normal form submit
    e.preventDefault();
    // Make sure data doesn't show in the navbar
    formElement.method = "post";
    // Get name of the function to handle request
    var handleFormFunc = formElement.getAttribute('onsubmit');
    // Convert form vals to object
    var formValues = ezeeValsToObj(formElement);
    // Run onsubmit function(currently has to be global) with new vals
        // TODO add support for object notation
    window[handleFormFunc](formValues, formElement);
}
function ezeeValsToObj(form) {
    var inputs = form.elements;
    // Holds name(key)/value pairs of form inputs
    var formVals = {};
    for(var i = 0; i < inputs.length; i++){
        var input = inputs[i];
        // This only grabs elements that have a value set
        if(input.value){
            // Stores by input name, or id, or displays nasty message.
            // ...because there really should be a 'name' on an input.
            var name;
            if(input.name) name = input.name;
            else if (input.id) name = input.id;
            else {
                name = 'no-name-please-set-name';
                alert("No 'name' set on input. See console." );
                console.log("No 'name' attribute set on element with value: ", input.value);
            }
            // Stores input value under it's name
            formVals[input.name] = input.value;
        }
    }
    return formVals;
}