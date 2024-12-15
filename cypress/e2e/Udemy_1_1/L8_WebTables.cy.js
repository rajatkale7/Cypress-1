describe('Handles web Tables', {testIsolation: false}, () => {
    before('Launch the URL', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.log('URL Launched');
        console.log('URL Launched');
    })

    it('Searches One entire col for text and validate for its price in the price column', () => {
        cy.log('Test started');
        cy.get('.table-display tr td:nth-child(2)').each(($e1, index, $list) => {
            const text=$e1.text();
            if(text.includes("Python")){
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then((WebEle) => {
                    const price= WebEle.text();
                    expect(price).to.equal('25')
                })
                //OR
                cy.wrap($e1).next().then((WebEle) => {
                    const price= WebEle.text();
                    expect(price).to.equal('25')
                })
            }
        })
    })
})