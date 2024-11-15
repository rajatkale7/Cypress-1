/*
Cypress confuses between native cypress commands and javascript commands
for ex. if we try to store an web element in variable, then it is difficult
to interact with the variable.
Let's see
*/
describe('We are handling Cypress Behaviour', () => {
    beforeEach('Launch the URL', () => {
        cy.clearAllCookies();
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    })

    it('Displays the website logo text', () => {
        /* WRONG &Unworkable
        const logoWE= cy.get('.brand');  //Locator trick--> 'brand greenLogo' >> we can omit next words if 1 on 1 element is captured
        cy.log(logoWE.text());

        We are storing web element inside logoWE, but it has no ability to resolve the promise.
        So, it simply returns the promise and we cannot perform any further action on it
        */

        //WAY-2
        cy.get('.brand').then(function(logoWebElement) {
            cy.log(logoWebElement.text());
        })

        //Using Arrow function
        cy.get('.brand').then((webEle) => {
            cy.log(webEle.text());
        })

        //Assertion
        cy.get('.brand').should('have.text', 'GREENKART');
    })

    it('Demonstrates Aliasing and Console', () => {
        //1. Alising
        cy.get('a.cart-icon').as('cartIcon');  //Naming the webelement Locator 
        cy.get('@cartIcon').click();

        /*2. Console in Cypress >>
        Cypress directly works on the browser, so you can see outpt in the browser's console.
        Run the test in cypress and open console by inspecting webpage.
        */

        console.log('Asynchronously printed I am a Cypress Learner'); 

        /*
        This is a JS command NOT Cypress command & cypress will not even handle this
        Hence, when execution starts, this command will get executed first without even the script reaches here.
        (Asynchronous behaviour of JS)

        EXTRA--> I understood Console and the non cypress, native JS commands.
        But I still want it to run line wise.--> Solution is, stich it.....?? --> then()
        Implementation can be seen in Csslocators.cy.js file and also below
        NOTE: Inspect--> console to see printed matter
        */

        cy.wait(3000).then(() => {
            console.log('Stiched and then printed that I am a cypress learner')
        })

        
    })
})