/// <reference types="cypress" />

describe('Global routing', () => {

  describe('Visit Landing', () => {
    it("should have a title containing 'Welcome'", () => {
      cy.serverWithRoutes();

      cy.visit('/')
        .get('h1')
        .should('contain', 'Welcome');
    });
  });

  describe('Visit Heroes', () => {
    it("should have a title containing 'Welcome to Heroes'", () => {
      cy.serverWithRoutes();

      cy.visit('/heroes')
        .get('h1')
        .should('contain', 'Welcome to Heroes');
    });
  });

  describe('Visit Heroes/1', () => {
    it("should have a title containing 'Superman'", () => {
      cy.serverWithRoutes();

      cy.visit('/heroes/1')
        .get('h1')
        .should('contain', 'Superman');
    });
  });

  describe('Visit Admin', () => {
    before(() => {
      cy.serverWithRoutes();
    });

    it("should have a title containing 'Admin' when logged in as admin", () => {
      cy.login('admin');

      cy.visit('/admin')
        .get('h1')
        .should('contain', 'Admin');
    });

    it("should redirect to landing when logged in as user", () => {
      cy.login('user');

      cy.visit('/admin')
        .url()
        .should('eq', `${Cypress.config('baseUrl')}/heroes`);
    });
  });
});