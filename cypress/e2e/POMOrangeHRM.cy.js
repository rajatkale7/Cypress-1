import Login from '../../PageObjects/Login';    //.. means move to one folder out of this file.
describe('Login Tests', () => {
    beforeEach('Lanches the URL', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(500);

    })
    it('performs the login', () =>{
        Login.passUsername('Admin');
        Login.passPassword('admin123');
        Login.clickLoginButton();
        cy.url().should('contain', 'dashboard'); //assertion telling us that we are on a home page but this is not enough
    })
})