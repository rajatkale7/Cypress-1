describe('This Suite contains various WE controls', () => {
    beforeEach('Launch the Page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.wait(2000);
    })

    it('Handles the Check Boxes', () => {
        cy.get('#checkBoxOption1').as('OP1').should('be.visible').check().and('be.checked').and('have.value', 'option1');
        //be is of an assertion type BDD-- checks the behaviour of an element
        //have is of an assertion type TDD-- checks the things from tests POV. means things are verified with test data

        cy.wait(1500);
        cy.get('@OP1').uncheck().should('not.be.checked');
    })

    it('Handles static dropdown', () => {
        cy.get('select').select('option2').should('have.value', 'option2');
        
    })
})