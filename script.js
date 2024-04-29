//your JS code here. If required.
function focusNextInput(currentInput) {
    const nextInput = currentInput.nextElementSibling;

    if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
    }
}
