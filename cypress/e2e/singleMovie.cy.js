describe('', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // cy.intercept(
    //   'GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id', () => {
    //     return {
    //        "id": 505642,
    //        "title": "Black Adam",
    //        "poster_path": "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    //        "backdrop_path": "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    //        "release_date": "2022-11-09",
    //        "overview": "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    //        "genres": [
    //         "Action",
    //         "Adventure",
    //         "Science Fiction"
    //         ],
    //        "budget": 250000000,
    //        "revenue": 733000000,
    //        "runtime": 162,
    //        "tagline": "Forever.",
    //        "average_rating": 4
    //     }
    //   }
    // )
  });

  it('should go a specific url and display the chosen movie details', () => {

  })

  it('should be able to view the movie title, tagline, release date, synopsis, rating, genre and run time', () => {
    // cy.get('.poster-image').find()
    cy.get('[alt="Black Adam movie poster"]').click()
    cy.wait(3000)
    // cy.url('http://localhost:3000/436270')
    cy.get('.single-movie').contains('h1', 'Black Adam')
    cy.get('.single-movie').contains('p', 'hero')
    cy.get('.single-movie').contains('p', '2022-10-19')
    cy.get('.single-movie').contains('p', 'Synopsis')
    cy.get('.single-movie').contains('p', '4/ 10 🍅')
    cy.get('.single-movie').contains('p', 'Action')
    cy.get('.single-movie').contains('p', '125 minutes')
  })




})

  

