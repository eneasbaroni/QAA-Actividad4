//importar archivo en e2e.js

Cypress.Commands.add("sendFormEmpty", () => {
    cy.log("Envío de form de contacto en blanco...");
    cy.get("#submitContact").click();
    cy.get(".alert").should("be.visible");
    cy.get("p").contains("Subject must be between 5 and 100 characters.");
    cy.get("p").contains("Subject may not be blank");
    cy.get("p").contains("Name may not be blank");
    cy.get("p").contains("Message must be between 20 and 2000 characters.");
    cy.get("p").contains("Message may not be blank");
    cy.get("p").contains("Email may not be blank");
    cy.get("p").contains("Phone may not be blank");
    cy.get("p").contains("Phone must be between 11 and 21 characters.");
});

Cypress.Commands.add("sendFormInvalid", (name, email, phone, subject, message) => {
    cy.log('Set de datos incorrectos...')
    cy.get('input[placeholder="Name"]').type(name)
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Phone"]').type(phone)
    cy.get('input[placeholder="Subject"]').type(subject)
    cy.get('[data-testid="ContactDescription"]').type(message)
    cy.get('#submitContact').click()

    cy.get('.alert').should('be.visible')
    cy.get('p').contains('Phone must be between 11 and 21 characters.')
    cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
    cy.get('p').contains('Message must be between 20 and 2000 characters.')
})

Cypress.Commands.add("sendFormValid", (name, email, phone, subject, message) => {
    cy.log('Set de datos correctos...')
    cy.get('input[placeholder="Name"]').type(name)
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Phone"]').type(phone)
    cy.get('input[placeholder="Subject"]').type(subject)
    cy.get('[data-testid="ContactDescription"]').type(message)
    cy.get('#submitContact').click()

})