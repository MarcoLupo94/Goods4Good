import { getGreeting } from '../support/app.po';

var check = '';

describe('charity-app', () => {
  /* beforeEach(() => cy.visit('http://localhost:4200')); */
  before(() => cy.visit('http://localhost:4200'));
  /*   it('should display welcome message', () => {
      cy.get(".mat-button-wrapper").contains("Get Started");
    }); */

  it('Landing page should have log in button', () => {
    cy.get('.mat-button-wrapper').click();
    cy.url().should('contain', 'dev-msv6b2s82hv7ytey.us.auth0.com');
    console.log('current URL:', cy.url());
  });

  //test@test.com // Testing1!
  it('should allow log in and redirect to home', () => {
    cy.get('input[name=username]').type('test@test.com');
    cy.get('input[name=password]').type('Testing1!');
    cy.get('button[name=action]').click();

    cy.url().should('contain', '/home');
  });

  it('home should display 10 charities', () => {
    cy.get('.mat-card').should('have.length', 10);
    cy.get('.mat-card-content')
      .first()
      .find('h3')
      .then(($title) => {
        console.log('FIRST CHARITY:', $title.text());
        //cy.visit('http://localhost:4200/home')
        check = $title.text();
      });
  });
});

describe('Random data loading', () => {
  before(() => cy.visit('http://localhost:4200'));

  it('Charity name should be different after reload', () => {
    cy.get('.mat-button-wrapper').click();
    cy.get('.mat-card').should('have.length', 10);
    cy.get('.mat-card-content')
      .first()
      .find('h3')
      .then(($title) => {
        console.log(
          'FIRST CHARITY 2nd round:',
          $title.text(),
          check === $title.text()
        );
        expect($title.text()).not.equal(check);
      });
  });
});

describe('Search page', () => {
  before(() => cy.visit('http://localhost:4200'));

  it('Search and display result', () => {
    cy.get('.mat-button-wrapper').click();
    cy.get('button[name=searchbutton]').click();
    cy.get('input[name=search]').type('Climate Change Fund');
    cy.get('.mat-card').should('have.length', 11);
  });
});
