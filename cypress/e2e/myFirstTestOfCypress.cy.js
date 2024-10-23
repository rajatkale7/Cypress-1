describe('template spec', () => {
  it('passes', () => {
    cy.viewport('macbook-16');  //for preview purpose. only for the size.
    cy.visit('https://www.google.com');

    //Using CSS
    // cy.get('#APjFqb').type('Overleaf templates for cv{enter}');
    // cy.get('h3').first().should('be.visible').click();  //clicking first google result

    //Using X-Path
    cy.xpath("//textarea[@id='APjFqb']").type('Gemini---------2024{enter}');
    cy.get('h3').first().should('be.visible').click();   //clicking first google result
  })
})
