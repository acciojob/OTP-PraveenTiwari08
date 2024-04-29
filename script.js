//your JS code here. If re
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        if (event.target.value.length === 1) {
            // If a number is typed, move focus to the next input
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            // If backspace is pressed and input is empty, move focus to the previous input
            if (input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});
