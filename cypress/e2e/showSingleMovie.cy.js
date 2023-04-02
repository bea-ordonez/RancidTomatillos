describe("", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      { fixture: "movies.json" }
    );
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495",
      { fixture: "single-movie-twk.json" }
    );
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495/videos",
      { fixture: "single-movie-videos-twk.json" }
    );
  });

  it("should go a specific url and display the chosen movie details", () => {});

  it("should be able to view the movie title, tagline, release date, synopsis, rating, genre and run time", () => {
    cy.get('[alt="The Woman King movie poster"]').click();
    cy.get(".single-movie").contains("h1", "The Woman King");
    cy.get(".single-movie").contains("p", "reign");
    cy.get(".single-movie").contains("p", "2022-09-15");
    cy.get(".single-movie").contains("p", "Synopsis");
    cy.get(".single-movie").contains("p", "4/ 10 🍅");
    cy.get(".single-movie").contains("p", "Action");
    cy.get(".single-movie").contains("p", "135 minutes");
  });
});
