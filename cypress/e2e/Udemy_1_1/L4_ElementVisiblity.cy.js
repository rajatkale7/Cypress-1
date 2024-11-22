describe('This suite has element visibility tests', {testIsolation: false}, () => {
    it('Handles Visibility Tests', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').as('TextBox').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('@TextBox').should('not.be.visible');
    })

    it('Handles Radio button', () => {
        cy.get('[value="radio3"]').check().should('be.checked');
    })
})
/*

Test isolation:
#Objective: if our test cases are of the same web page, then why to reload the page again.
#Cypress behaviour: it isolated every it() block from each other.
#Solution: prevent the isolation and disable it. How?? tell the suite to disable it. {tetsIsolation: false}

*/