class Login{
    passUsername(username){
        cy.xpath("//input[@name='username']").type(username, {delay: 50});
    }

    passPassword(password){
        cy.xpath("//input[@name='password']").type(password, {delay: 100});
    }

    //{delay: 100}-A value of 100 means Cypress will wait 100 milliseconds between each character typed

    clickLoginButton(){
        cy.xpath("//button[contains(@class, 'oxd')]").click();
    }

    clickOnForgetPassword(){
        cy.xpath("//body//div[4]//p").click();
    }
}

export default new Login();