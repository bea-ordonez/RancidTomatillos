describe("user should see movie image for each movie in the movie container", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      { fixture: "movies.json" }
    );
    cy.visit("http://localhost:3000");
  });

  it("should connect to a local site", () => {
    cy.visit("http://localhost:3000");
  });

  it("should see movie images", () => {
    cy.get(".poster-image").should("be.visible");
    cy.get(".movie-cards").find(".poster-image").should("have.length", "5");
  });

  it("should see a title of the movie cinema", () => {
    cy.contains("Bea & Travis's Movie Cinema");
  });
});
