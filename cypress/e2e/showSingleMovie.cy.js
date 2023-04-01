describe('', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should go a specific url and display the chosen movie details', () => {
  })

  it('should be able to view the movie title, tagline, release date, synopsis, rating, genre and run time', () => {
    cy.get('[alt="Black Adam movie poster"]').click()
    cy.get('.single-movie').contains('h1', 'Black Adam')
    cy.get('.single-movie').contains('p', 'hero')
    cy.get('.single-movie').contains('p', '2022-10-19')
    cy.get('.single-movie').contains('p', 'Synopsis')
    cy.get('.single-movie').contains('p', '4/ 10 🍅')
    cy.get('.single-movie').contains('p', 'Action')
    cy.get('.single-movie').contains('p', '125 minutes')
  })
})

  

