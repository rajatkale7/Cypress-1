describe('Just a thing', {testIsolation: false}, () => {
    before('Launches the URL', () => {
        cy.visit('https://www.interviewbit.com/');
    })

    Cypress._.times(4, (k) => {
        it('Runs 4 times', () => {
            cy.get('.ib-rolling-ribbon__description').should('be.visible').and('contain','mediocre career');
        })
    })
})