describe('Google Search Scenario', () => {

  beforeEach(() =>{
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.clearCookies();
    cy.viewport('macbook-13');
    cy.visit('https://www.google.com');
  })


  it('TC_003_Clicks on nth google search reccommondation', () =>{
    cy.xpath("//textarea[@id='APjFqb']").type('Gemini---------2024');   //test field
    cy.wait(2000);
    cy.xpath("//div[1]/div/ul/li[4]").click(); //Choose the reccomended typo and click on it
    cy.end();
  })


  it('TC_004_Clicks on first google search page', () => {
    //Using CSS
    // cy.get('#APjFqb').type('Overleaf templates for cv{enter}');
    // cy.get('h3').first().should('be.visible').click();  //clicking first google result

    //Using X-Path
    cy.xpath("//textarea[@id='APjFqb']").type('October movie{enter}');
    cy.get('h3').first().should('be.visible').click();   //clicking first google result
    cy.end();
  })
})
