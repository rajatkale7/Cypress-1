describe('Child window and Origin Switching', () => {
    before('Launch the URL', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('Click on the link which takes you to the new tab', () => {
        /*
        cy.get('#opentab').click();

        Once I click on above button which is a link, I will go to new tab. But Cypress has no ability to switch the tabs
        So, we will open the link in the current tab itself.
        HOW???  
        Using JQuery--> we will disable the logic that the Developer has set to open a link in new tab (see below attribute)

        ***Inspect the button and we will see target="_blank". It switches the link to new tab.

        */
        cy.get("#opentab").invoke('removeAttr', 'target').click();
        
        /*
        Problem:
        cy.get('.button.float-left').click(); 
        This will not work(Cypress Behaviour). Because Now we have shifted from One Origin to other. Our Domain https://rahulshetty... 
        is now shifted. Because, we clicked a button which took us to https://www.qaclickacademy.com/ 

        Solution:
        Tell the cypress that Origin is changed.
        */

        cy.origin('https://www.qaclickacademy.com/', () => {
            //cy.get('.button.float-left').click();      //is Now working fine
        })
    })
})