describe('it is for login', () => {

  beforeEach(() =>{
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    cy.viewport(1920, 1080);
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  })


  it('TC_001_Performs the login', () =>{
    cy.xpath("//input[@name='username']").type('Admin');
    cy.xpath("//input[@name='password']").type('admin123');
    cy.xpath("//button[contains(@class, 'oxd')]").click();
    //waits in cypress
    cy.wait(3000);
  })

  it('TC_002_Clicks on forgot password option', () =>{
    cy.wait(3000);
    //cy.get('.orangehrm-login-forgot > .oxd-text')
    cy.xpath("//body//div[4]//p").click();
  })
})