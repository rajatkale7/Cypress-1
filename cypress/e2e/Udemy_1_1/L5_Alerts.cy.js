describe('This suite handles Alerts, Pop-ups', {testIsolation: false}, () => {
    before('Launch the URL', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.log('URL is Launched');
        console.log('URL is Launched');
    })

    it('Auto Handling of the alerts by cypress', () => {
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        console.log('Both the alerts are eaten by cypress');
    })

    it('Asserting the alerts using Listeners', () => {
        //Behaviour: Cypress has capability to listen and fire to the browser events. It auto accepts the alerts
        //Developer-Design: There is an event called as 'window alert' that is triggered in the browser when alert is thrown
        //Problem: Cypress auto accepts the browser alerts and you just cannot change this behaviour.
        //Solution: Set up the listeners--> This will be waiting for the alerts. once thrown, catch it and assert it

        //Setting up the listeners
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge').and.include('Hello');
        })

        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Hello , Are you sure you want to confirm?').and.include('confirm');
        })

        //Action that throws the alert(In real time, it will come automatically. This is just for test purpose)
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
    })

    after('End of all the test cases', () => {
        cy.log('All test cases are done');
        console.log('All the test cases are done');
    })
})