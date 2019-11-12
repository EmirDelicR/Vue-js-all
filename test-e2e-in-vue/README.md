# test-e2e-in-vue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Cypress

[Cypress Docks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#What-is-watched)

### Guide

tests/e2e/specs

- life cycle in cypress ( test.js )

- check elements existence ( /views/home.js)

### Docks

```javascript
/** Life cycle */

before(() => {
  cy.log("I run only one time before all tests!!!!!");
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
```

```javascript
/** Best practice */

<button data-cy="submit">Submit</button>

cy.get('[data-cy=submit]').click()	 Always	Best. Insulated from all changes.
```

```javascript
/* Get base url */

1. From config

    cy.log(Cypress.config().baseUrl); // http://localhost:port/

2. From cypress.env.json file

    cy.log(Cypress.env("baseUrl")); // What ever you put in .env file

```
