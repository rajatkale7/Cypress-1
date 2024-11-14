/*
How to write CSS?
1. If the 'id' attribute is present--> '#idValue'

2. If the 'class' attribute is present--> '.classValue'

for ex: class value is 'oxd-input oxd-input--active', replace space by dot.
'input.oxd-input.oxd-input--active[name="username"]' is the complete css. 

********If multiple elements are located then we can do -->tagname.above 2 CSS ******

3. Using normal way--> tag[AN='AV']

4. Traversing from parent to child tags. simply add space--> 'tag1 tag2'

*/

describe('Suite is for testing ecom website', () =>{
    beforeEach('Launch the URL', () =>{
        cy.viewport('macbook-11');
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        
    })

    it('Searches ca and Counts the products', () => {
        cy.get('input.search-keyword').type('ca');
        cy.wait(2000);
        //Way-1(Using Visible)
        cy.get('.product:visible').should('have.length', 4);
        //'.product' CSS gave us 5 elements and 1 is not visible so, ':visible' makes sure to only include visible ones.

        /*Way-2(Using Parent child chaining) -to avoid unnecessory &invisible element catching
                                -to decrease the search space
            the CSS '.products' is the parent of all the individual products. So, we will capture the products from this
            search space.
            Below is the code for chaining-->
        */

        cy.get('.products').find('.product').should('have.length', 4);
    })

    it('Performs add to cart on the targeted index', () => {
        cy.get('input.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        // We extracted 4 products, then select first index, search for the text and click on it.
    })

    it('Performs add to cart on the element dynamically', () => {
        cy.get('input.search-keyword').type('ca');
        cy.wait(2000);
        //I want to click on the product with name "cashew"

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const elementText= $el.find('.product-name').text();  //Chaining and then extract the text from the WE
            if(elementText.includes('Cashews')){

                //IMP*IMP*IMP--> $el is a single web element but that element contains other tags also(child elements)
                //above thing is about line 55 and 61
                
                cy.wrap($el).find('button').click();    //button is the tag name and it can be used as a CSS

                //$el.find('button').click();  If I uncomment this line, click() will not work. and hence we used wrap().
            }
        })

    })
})

/*
Asynchronous Nature of the cypress-->

asynchronous nature means the execution will not go line by line. every line will hit the server
at a time and will form a state known as promise. The reason of this nature of cypress is 
because it has been built over Node(Javascript based) and JS is in itself asynchronous.

To resolve this, then() block should be used and commands should be concatenated with each other
sequentially. 
OMG HEADACHE..... 
Don't worry, Cypress team has taken care of this and wrote the backend 
of the cypress in similar fashion.

*/