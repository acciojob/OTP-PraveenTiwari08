//your JS code here. If required.
function focusNextInput(currentInput) {
        if (currentInput.value.length === 1) {
            var nextInput = currentInput.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        } else if (currentInput.value.length === 0) {
            var previousInput = currentInput.previousElementSibling;
            if (previousInput) {
                previousInput.focus();
            }
        }
    }