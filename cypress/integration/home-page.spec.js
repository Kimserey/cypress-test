/// <reference types="cypress" />

describe('Home Page', () => {
  it('contains the title', () => {
    cy.visit('http://localhost:4200');

    cy.get('h1')
      .should('contain', 'Welcome');
  });
});