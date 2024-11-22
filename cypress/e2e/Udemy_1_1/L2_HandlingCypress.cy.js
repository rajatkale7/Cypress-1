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

        //Handled the behaviour
        cy.wait(3000).then(() => {
            console.log('Stiched and then printed that I am a cypress learner')
        })
    })

    it('Simple clicking Automation exercise', () => {
        cy.get('input.search-keyword').type('ca');
        cy.wait(1000);
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const elementText= $el.find('.product-name').text();  //Chaining and then extract the text from the attribute
            if(elementText.includes('Cashews')){

                //IMP*IMP*IMP--> $el is a single web element but that element contains other tags also(child elements)
                //above thing is about line 55 and 61
                
                cy.wrap($el).find('button').click();    //button is the tag name and it can be used as a CSS

                //$el.find('button').click();  If I uncomment this line, click() will not work. and hence we used wrap().
            }
        })

        cy.get('a.cart-icon').as('cartIcon');
        cy.get('@cartIcon').click().then(() => {
            cy.get('.cart-preview').contains('PROCEED TO CHECKOUT').click();
        })
        cy.get('button').contains('Place Order').click();
    })
})