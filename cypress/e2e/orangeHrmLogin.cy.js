describe('it is for login', () => {
    it('passes', () => {
      cy.viewport(1920, 1080);
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      cy.xpath("//input[@name='username']").type('Admin');
      cy.xpath("//input[@name='password']").type('admin123');
      
      cy.xpath("//button[contains(@class, 'oxd')]").click();
      cy.wait(3000);
  
    })
  })