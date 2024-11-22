describe('this suite is for Searching the flights', () =>{
    beforeEach('Launches the URL', () =>{
        cy.viewport('macbook-11');
        cy.wait(200);
        cy.visit('https://www.google.com');
    })

    it('Performs Google Scholor search', () =>{
        //nothing
        //cy.scrollTo('bottom');
        //cy.xpath("//input[@id='gs_hdr_tsi']").type('Agile testing QA{enter}', {delay:100});
        
    })
})