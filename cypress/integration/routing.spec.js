/// <reference types="cypress" />

describe('Global routing', () => {
  beforeEach(() => {
    cy.server();

    cy.fixture('heroes.json').then(heroes => {
      cy.route('http://localhost:5000/heroes', heroes);
      cy.route('http://localhost:5000/heroes/*', heroes[0]);
    });
  })

  describe('Visit Landing', () => {
    it("should have a title containing 'Welcome'", () => {
      cy.visit('/')
        .get('h1')
        .should('contain', 'Welcome');
    });
  });

  describe('Visit Heroes', () => {
    it("should have a title containing 'Welcome to Heroes'", () => {
      cy.visit('/heroes')
        .get('h1')
        .should('contain', 'Welcome to Heroes');
    });
  });

  describe('Visit Heroes/1', () => {
    it("should have a title containing 'Superman'", () => {
      cy.visit('/heroes/1')
        .get('h1')
        .should('contain', 'Superman');
    });
  });

  describe('Visit Admin', () => {

    describe('Logged in as admin', () => {
      it("should have a title containing 'Admin'", () => {
        cy.login('admin');

        cy.visit('/admin')
          .get('h1')
          .should('contain', 'Admin');
      });
    });

    describe('Logged in as user', () => {
      it("should redirect to landing", () => {
        cy.login('user');

        cy.visit('/admin')
          .url()
          .should('eq', `${Cypress.config('baseUrl')}/heroes`);
      });
    });
  });
});