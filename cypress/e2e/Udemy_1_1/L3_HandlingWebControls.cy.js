describe('This Suite contains various WE controls', {testIsolation: false}, () => {
    before('Clears the cookies when I open Browser', () => {
        cy.clearAllCookies();
    })

    it('Handles the Check Boxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');   //test isolation is off so no need to load it again and again
        cy.get('#checkBoxOption1').as('OP1').should('be.visible').check().and('be.checked').and('have.value', 'option1');
        //be is of an assertion type BDD-- checks the behaviour of an element
        //have is of an assertion type TDD-- checks the things from tests POV. means things are verified with test data

        cy.wait(500);
        cy.get('@OP1').uncheck().should('not.be.checked');
    })

    it('Handles static dropdown', () => {
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
    })

    it('Handles Dynamic dropdown', () => {
        //Dynamic dropdown is a kind of a google search. type and it will show the matching 
        //options. This type of dropdown is designed because the selection values are large and 
        //hence it needs user input to display the options associated with it.

        cy.get('#autocomplete').as('TextBox').type('ind', {delay:100});
        cy.wait(500);
        cy.get('#ui-id-1').find('li').each(($el, index, $list) => {
            const elementText= $el.find('div').text();
            if(elementText ==='India'){
                cy.wrap($el).click();
                return false;
            }
        })

        cy.get('@TextBox').should('have.value', 'India'); //We can always do this assertion for text boxes
    })

    after('Runs after all it blocks', () => {
        console.log('All tests are done inside this describe block');
    })

    afterEach('Runs after each it block', () => {
        console.log('******Single it block finished');
    })
})