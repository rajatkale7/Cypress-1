class Login{
    passUsername(username){
        cy.xpath("//input[@name='username']").type(username);
    }

    passPassword(password){
        cy.xpath("//input[@name='password']").type(password);
    }

    clickLoginButton(){
        cy.xpath("//button[contains(@class, 'oxd')]").click();
    }

    clickOnForgetPassword(){
        cy.xpath("//body//div[4]//p").click();
    }
}

export default new Login();