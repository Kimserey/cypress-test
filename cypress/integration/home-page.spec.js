/// <reference types="cypress" />

describe('Routing', () => {
  before(() => {
    cy.server();

    cy.fixture('heroes.json').then(heroes => {
      cy.route('http://localhost:5000/heroes', heroes);
      cy.route('http://localhost:5000/heroes/*', heroes[0]);
    });
  });

  it('contains superhero title', () => {
    cy.visit('http://localhost:4200');

    cy.get('li a')
      .first()
      .click();

    cy.url()
      .should('eq', 'http://localhost:4200/heroes/1');

    cy.get('#back-to-listing')
      .click();

    cy.url()
      .should('eq', 'http://localhost:4200/heroes');
  });
})