describe('it is for login', () => {

  beforeEach(() =>{
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    cy.viewport('macbook-13');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })

  it('Checks the Login page Web Elements', () =>{
    //1. URL based Assertions-->
    
    cy.url().should('include', 'orangehrm');  //Assertion which checks that url contains the specified part
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url().should('contain', 'demo');
    cy.url().should('not.contain', 'bug');

    //2. Web Element based Assertions-->

    cy.xpath("//button[contains(@class, 'oxd')]").should('exist').and('be.visible');
    cy.title().should('contain', 'Orange').and('eq', 'OrangeHRM');  //Every webpage has a title. Please inspect and check top tags
    cy.get('.orangehrm-login-branding > img').should('exist').and('be.visible');

    //3. Assertion that counts number of links that are present on the webpage-->

    cy.xpath("//a").should('have.length', 5);   //"//a" is known as anchor-tag which is used for links

    /*
    -we can also do chaining ->
    cy.url().should().should().should();
    -we can avoid writing 'should' keyword multiple times->
    cy.url().should().and();
    */
    
  })


  it('TC_001_Performs the login', () =>{
    cy.wait(1500);
    cy.xpath("//input[@name='username']").type('Admin');    //We are typing the text inside box

    //4. Assertion for verifying the typed value inside the box
    cy.xpath("//input[@name='username']").should('have.value', 'Admin');

    cy.xpath("//input[@name='password']").type('admin123');
    cy.xpath("//button[contains(@class, 'oxd')]").click();
    cy.wait(1000);

    //Explicit assertion--> these are the custom assertions defined by us

    let expectedName="manda user"; //this is the username on the dashboard after login

    cy.xpath("//p[@class='oxd-userdropdown-name']").then((userNameWebElement) =>{
      //userNameWebElement is the name of the variable where captured web-element is stored

      let actualName= userNameWebElement.text();    //method to pull text from element
      //BDD Style-->
      expect(actualName).to.equal(expectedName);

      //TDD style-->
      assert.equal(actualName, expectedName);
    })
    
  })

  it('TC_002_Clicks on forgot password option', () =>{
    cy.wait(2000);
    //cy.get('.orangehrm-login-forgot > .oxd-text')
    cy.xpath("//body//div[4]//p").click();

    //Assertions
  })
})