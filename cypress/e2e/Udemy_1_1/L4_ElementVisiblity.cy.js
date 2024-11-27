describe('This suite has element visibility tests', {testIsolation: false}, () => {
    before('Launch the Website', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('Handles Visibility Tests', () => {
        cy.get('#displayed-text').as('TextBox').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('@TextBox').should('not.be.visible');

        console.log('Visibility Test Done');
        cy.log('Visibility Test Done');
    })

    it('Handles Radio button', () => {
        cy.get('[value="radio3"]').check().should('be.checked');
        
        console.log('Third radio button selected');
        cy.log('Radio Button Test Done');
    })

    after('End of the Suite', () => {
        console.log('This is End of the suite');
        cy.log('End of the Suite');
    })
})
/*

Test Isolation:
--Framework Building:
#Objective: if our test cases are of the same web page, then why to reload the page again.
#Cypress behaviour: it isolated every it() block from each other.
#Solution: prevent the isolation and disable it. How?? tell the suite to disable it. {testIsolation: false}
#But WHY?? : Loading same webpage will lead to slow down the test execution time and hamper the performance.

*/