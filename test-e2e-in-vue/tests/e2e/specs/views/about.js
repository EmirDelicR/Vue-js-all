// https://docs.cypress.io/api/introduction/api.html

describe("Testing Form fields: ", () => {
  before(() => {
    cy.visit(`${Cypress.env("baseUrl")}/about`);
  });

  it("Check location ref on about page: ", () => {
    cy.location().should(loc => {
      expect(loc.hash).to.eq("#/about");
      expect(loc.host).to.eq("localhost:8081");
      expect(loc.hostname).to.eq("localhost");
      expect(loc.href).to.eq("http://localhost:8081/#/about");
      expect(loc.origin).to.eq("http://localhost:8081");
      expect(loc.pathname).to.eq("/");
      expect(loc.port).to.eq("8081");
      expect(loc.protocol).to.eq("http:");
      // expect(loc.search).to.eq("?q=dan");
      expect(loc.toString()).to.eq("http://localhost:8081/#/about");
    });
  });

  it("Check if about page have nav element with links: ", () => {
    cy.get("#nav").contains("a", "Home");
    cy.get("#nav").contains("a", "About");
  });

  it("Check if home page have h1 element: ", () => {
    cy.contains("h1", "Tell Us About Yourself");
  });

  it("Check change title on button press: ", () => {
    cy.get("[data-cy=form-name-inp]")
      .focus()
      .type("This is Sparta!")
      .blur();
    cy.get('[data-cy="form-button"]').click();
    cy.contains("h1", "This is Sparta!");
  });

  it("Check hover effect on select: ", () => {
    cy.get("[data-cy=form-color-select]").trigger("mouseover");
    // DO something
  });

  it("Select Element from options: ", () => {
    cy.get("[data-cy=form-color-select]").select("Blue");
  });

  it("Input radio favorite Hamburger: ", () => {
    cy.get("[data-cy=form-radio-burger]")
      .find("input")
      .then($inputs => {
        cy.wrap($inputs[1]).check();
      });
  });

  it("Input radio favorite hangout: ", () => {
    cy.get("[data-cy=form-radio-favorite]")
      .find("input")
      .then($inputs => {
        cy.wrap($inputs[2]).check();
      });
  });

  it("Test right mouse click on element: ", () => {
    cy.get("[data-cy=form-range-inp]").rightclick();
    // DO Something
  });

  it("Set value on range element: ", () => {
    cy.get("[data-cy=form-range-inp]")
      .invoke("val", 54)
      .trigger("input");
  });

  it("Submit Form using button: ", () => {
    cy.get("[data-cy=form-button-submit]").click();
    cy.get("div.about").contains("div.message", "Successfully Submitted!");
  });
});
