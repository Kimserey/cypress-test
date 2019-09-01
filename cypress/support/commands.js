// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/// <reference types="cypress" />

Cypress.Commands.add("login", userType => {
  cy.fixture('login.json')
    .then(login => {
      switch (userType) {
        case 'admin':
          return login.admin;
        default:
          return login.user;
      }
    })
    .then(userType => {
      window.localStorage.setItem('user_type', userType);
    })
});

Cypress.Commands.add("serverWithRoutes", () => {
  cy.server();

  cy.fixture('heroes.json').then(heroes => {
    cy.route('http://localhost:5000/heroes', heroes);
    cy.route('http://localhost:5000/heroes/*', heroes[0]);
  });
});