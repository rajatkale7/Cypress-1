describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.wait(6000)
    cy.get('body').then($body => {
      if ($body.find('iframe').length > 0) {
        // Switch to the iframe
        cy.get('iframe').then($iframe => {
          const iframeBody = $iframe.contents().find('body');

          // Click the "Stay signed out" button inside the iframe
          cy.wrap(iframeBody).find("button").contains('Stay signed out').click();
        });
      }
    })
    // Wait for the input field to be available
    cy.get('input[name="q"]').should('be.visible');

    // Type 'overleaf' in the search box and hit Enter
    cy.get('input[name="q"]').type('overleaf{enter}');
  })
})