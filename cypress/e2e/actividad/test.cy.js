describe("Form", { testIsolation: false }, () => {
    
    it("Ingresar en la pagina", () => {
        cy.visit("https://automationintesting.online/");
    });

    it("Verificar la info del hotel", () => {
        cy.get("p").contains("Shady Meadows B&B")
        cy.get("p").contains("The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S")
        cy.get("p").contains("012345678901")
        cy.get("p").contains("fake@fakeemail.com")        
    });

    it("Verificar que al menos haya una imagen visible", () => {

        cy.get('img').should("be.visible");

        //extra, verificar que haya una imagen con la clase "hotel-img" visible
        cy.get('img.hotel-img').should("be.visible");
    });

    it("Verificar que la descripción del hotel sea la correcta", () => {
        cy.get("p").contains("Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.");
    });

    it('Envio del formulario de contacto vacio', () => {
        cy.sendFormEmpty()
    });

    it('Envio del formulario de contacto con info incorrecta', () => {
        const name = 'asd'
        const email = 'asd'
        const phone = 'asd'
        const subject = 'asd'
        const message = 'asd'
        cy.sendFormInvalid(name, email, phone, subject, message)
    });

    it('Envio del formulario de contacto con info correcta', () => {
        const name = 'Juan Perez'
        const email = 'juan@gmail.com'
        const phone = '35123696457'
        const subject = 'Reserva de habitación para fecha X'
        const message = 'loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo'
        cy.sendFormValid(name, email, phone, subject, message)
    });
});
