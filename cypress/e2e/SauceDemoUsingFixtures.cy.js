describe('This is a Sauce-Demo website', () =>{

    beforeEach('Performs the login', () =>{
        cy.clearCookies();
        cy.fixture('sauceDemoLogin').as('userData');  //From fixtures folder, store the data as 'userData'
    })

    it('Performs the login', function(){
        const userKeys= ['user1', 'user1', 'user1', 'user1', 'user1', 'user1', 'user1', 'user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8'];

        //Above array has the Keys of the login credentials, refer sauceDemoLogin.json folder inside fixtures for clarity
        //Apply forEach on above array
        //'key' is a variable storing the array elements

        userKeys.forEach((key) => {
            const user= this.userData[key];   //store the value for each key
            cy.visit('https://www.saucedemo.com/v1/');
            cy.xpath('//div/form/input[1]').type(user.userName);
            cy.xpath('//div/form/input[2]').type(user.password);
            cy.xpath('//div/form/input[3]').click();
            cy.wait(500);
            cy.url().should('contain', 'inventory'); //Assertion on the URL which confirms login is done
        })
    })
})