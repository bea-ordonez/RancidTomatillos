describe('when the server returns an error', () => {
  it('When the server returns a 500 error, the user will see error handling', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 });
    cy.visit('http://localhost:3000');
    cy.contains('Error')
    cy.contains('Page Not Found')
    cy.contains('Go Home').click()
    cy.url().should("contains", "http://localhost:3000")
  });
});