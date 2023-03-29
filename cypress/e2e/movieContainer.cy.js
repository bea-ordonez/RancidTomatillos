describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies');
  });

  it('should connect to a local site', () => {
    cy.visit('http://localhost:3000');
  });

  it('should display every movie available', () => {
    cy.get('.movie-cards').find('.poster-image').should('have.length', '40');
  })

  it('should navigate to the single movie page after clicking on a movie poster', () => {
    
  })


})