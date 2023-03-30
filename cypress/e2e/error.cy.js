describe("A user should see an error page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/436270/nope");
  });

  it("User should be redirect to an Error page if the URL is incorrect", () => {
    cy.get('div[class="error-page"]').should("be.visible");
  });

  it('User should see the "Page Not Found" message', () => {
    cy.get("h1").should("be.visible");
    cy.get('h1').should('contain', "Page Not Found")
  });

  it('User should be redirected back to the home movie page when clicking the go home button', () => {
    cy.contains('Go Home').click()
    cy.url().should("include", "http://localhost:3000")
  })
})