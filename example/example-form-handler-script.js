var testOutput = document.getElementById('output-test');
function handleFormTest(formVals, formElement) {
    testOutput.innerHTML = JSON.stringify(formVals, null, 4);
    formElement.style.border = '1px solid rgb(20,0,0)';
}