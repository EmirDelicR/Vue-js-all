// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  before(() => {
    cy.visit("/");
  });

  it("Check if home page have nav element with links: ", () => {
    cy.get("#nav").contains("a", "Home");
    cy.get("#nav").contains("a", "About");
  });

  it("Check if nav element with links have correct links: ", () => {
    cy.get("#nav")
      .find("a")
      .then($links => {
        cy.wrap($links[0])
          .should("have.property", "href")
          .and("eq", `${Cypress.env("baseUrl")}/`);

        cy.wrap($links[1])
          .should("have.property", "href")
          .and("eq", `${Cypress.env("baseUrl")}/about`);
      });
  });

  it("Check if home page have h1 element: ", () => {
    cy.contains("h1", "Welcome to Your Vue.js App");
  });

  it("Check custom function created in support/commands.js Press F12: ", () => {
    cy.clog("This should console log this message!");
  });

  it("check div with class hello and check if have custom class: ", () => {
    cy.get("div.hello").should("have.attr", "class", "hello custom");
  });

  it("check the number of list elements: ", () => {
    cy.get("div.hello")
      .find("ul")
      .then($lists => {
        cy.wrap($lists[0])
          .find("li")
          .should("have.length", 2);
        cy.wrap($lists[1])
          .find("li")
          .should("have.length", 5);
      });
  });

  it("check the number of h3 in home page: ", () => {
    cy.get("div.hello")
      .find("h3")
      .should("have.length", 2);
  });

  it("Pres Link and go to about page: ", () => {
    cy.get("#nav")
      .find("a")
      .then($links => {
        cy.wrap($links[1]).click();
        cy.url().should("eq", `${Cypress.env("baseUrl")}/about`);
        cy.url().should("include", "/about");
        cy.wrap($links[0]).click();
        cy.url().should("eq", `${Cypress.env("baseUrl")}/`);
      });
  });
});
