// https://docs.cypress.io/api/introduction/api.html

describe("Testing Home.vue view url: / ", () => {
  before(() => {
    cy.log("I run only one time before all tests!!!!!");
    cy.visit("/");
  });

  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
  });

  after(() => {
    cy.log("I run once after all tests in the block!!!!!!");
  });

  afterEach(function() {
    cy.log("I run after each test in the block!!!!!!");
  });

  it("Check if home page contains h1 element: ", () => {
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});
