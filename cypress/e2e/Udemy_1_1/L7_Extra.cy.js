describe('Just a thing', {testIsolation: false}, () => {
    before('Launches the URL', () => {
        cy.visit('https://www.interviewbit.com/');
        cy.log('Website is Launched');
        console.log('Website is Launched');
    })

    Cypress._.times(4, () => {
        it('Runs 4 times', () => {
            cy.get('.ib-rolling-ribbon__description').should('be.visible').and('contain','mediocre career');
            console.log('Running this Test case 4 times');
        })
    })
})