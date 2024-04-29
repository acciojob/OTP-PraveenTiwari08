//your JS code here. If re
// Typing the OTP digits into the input fields
cy.visit(baseUrl + "/main.html");
cy.get(".code").eq(5).type("{backspace}"); // Backspace last digit
cy.focused().should("have.class", "code"); // Check if focus is on the last input
cy.get(".code").eq(4).type("{backspace}"); // Backspace fifth digit
cy.focused().should("have.class", "code"); // Check if focus is on the fifth input
cy.get(".code").eq(3).type("{backspace}"); // Backspace fourth digit
cy.focused().should("have.class", "code"); // Check if focus is on the fourth input
cy.get(".code").eq(2).type("{backspace}"); // Backspace third digit
cy.focused().should("have.class", "code"); // Check if focus is on the third input
cy.get(".code").eq(1).type("{backspace}"); // Backspace second digit
cy.focused().should("have.class", "code"); // Check if focus is on the second input
cy.get(".code").eq(0).type("{backspace}"); // Backspace first digit
cy.focused().should("have.class", "code"); // Check if focus is on the first input
