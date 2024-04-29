//your JS code here. If required.
function focusNextInput(currentInput) {
    const nextInput = currentInput.nextElementSibling;

    if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
    }
}
// Typing the OTP digits into the input fields
cy.visit(baseUrl + "/main.html");
cy.get(".code").eq(0).type(5); // Input first digit
cy.get(".code").eq(1).type(1); // Input second digit
cy.get(".code").eq(2).type(7); // Input third digit
cy.get(".code").eq(3).type(2); // Input fourth digit
cy.get(".code").eq(4).type(9); // Input fifth digit
cy.get(".code").eq(5).type(6); // Input sixth digit

// Backspacing to clear the OTP digits
cy.visit(baseUrl + "/main.html");
cy.get(".code").eq(5).type("{backspace}"); // Backspace last digit
cy.get(".code").eq(4).type("{backspace}"); // Backspace fifth digit
cy.get(".code").eq(3).type("{backspace}"); // Backspace fourth digit
cy.get(".code").eq(2).type("{backspace}"); // Backspace third digit
cy.get(".code").eq(1).type("{backspace}"); // Backspace second digit
cy.get(".code").eq(0).type("{backspace}"); // Backspace first digit
