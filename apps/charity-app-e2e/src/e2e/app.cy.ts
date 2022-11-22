import { getGreeting } from '../support/app.po';

var check = '';

describe('charity-app', () => {
  /* beforeEach(() => cy.visit('http://localhost:4200')); */
  /*  before(() => {
     cy.clearCookies();
     cy.clearLocalStorage();
   }); */
  /*   it('should display welcome message', () => {
      cy.get(".mat-button-wrapper").contains("Get Started");
    }); */

  it('Landing page should have log in button', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('http://localhost:4200');
    cy.get(".mat-button-wrapper").click();
    cy.url().should('contain', "dev-msv6b2s82hv7ytey.us.auth0.com");
    console.log("current URL:", cy.url());
  });

  //test@test.com // Testing1!
  it('should allow log in and redirect to home', () => {

    cy.get('input[name=username]').type('test@test.com');
    cy.get('input[name=password]').type('Testing1!');
    cy.get('button[name=action]').click();

    cy.url().should('contain', "/home");

  });

  it('home should display 10 charities', () => {

    cy.get('.mat-card').should('have.length', 10);
    cy.get('.mat-card-content').first().find('h3').then(($title) => {
      console.log("FIRST CHARITY:", $title.text());
      //cy.visit('http://localhost:4200/home')
      check = $title.text();
    });
    cy.wait(1500);
  });

});

describe('Random data loading', () => {

  before(() => cy.visit('http://localhost:4200'));

  it('Charity name should be different after reload', () => {

    cy.get(".mat-button-wrapper").click();
    cy.get('.mat-card').should('have.length', 10);
    cy.get('.mat-card-content').first().find('h3').then(($title) => {
      console.log("FIRST CHARITY 2nd round:", $title.text(), check === $title.text());
      expect($title.text()).not.equal(check);

    });
    cy.wait(1500);
  });


});

describe('Search page', () => {

  before(() => cy.visit('http://localhost:4200'));

  it('Search and display result', () => {

    cy.get(".mat-button-wrapper").click();
    cy.get('button[name=searchbutton]').click();
    cy.wait(1500);
    cy.get('input[name=search]').type('Climate Central');
    cy.wait(150);
    cy.get('.mat-card').should('have.length', 1);

  });
});

describe('Pick a charity and donate clothes', () => {

  //before(() => cy.visit('http://localhost:4200'));

  it('Go to "Climate Central" page', () => {

    cy.get('.mat-card-content').first().find('h3').then(($title) => {
      expect($title.text()).to.equal('Climate Central');
    });

    cy.get('.mat-card-content').first().find('h2').click();
    cy.wait(1500);
  });

  it('Go to "Climate Central" clothes donation form', () => {

    cy.get('.buttons').contains('Donate Clothes').click();
    cy.wait(1500);
  });

  it('Upload an image', () => {

    cy.get('input[type=file]').selectFile('C:\\Users\\fabtr\\codeworks\\WEEK7\\charity-app\\apps\\charity-app-e2e\\src\\data\\test.jpg', { force: true });
    cy.wait(1500);
  });

  it('Give error if price is wrong', () => {

    cy.get('input[name=title]').type('Example item...');
    cy.get('input[name=price]').type('12.3343');
    cy.get('input[name=size]').type('XXL');
    cy.get('textarea[name=description]').type('Testing item form with input validation');
    cy.get('button[name=item_submit]').click();
    cy.wait(1500);


    cy.get('[id=error]').should('have.text', 'Error: please check if all field are correct');

  });

  it('Remove error and submit if price is correct', () => {

    cy.get('input[name=price]').clear();
    cy.get('input[name=price]').type('12.33');
    cy.get('button[name=item_submit]').click();
    cy.get('[id=error]').should('not.exist');

  });

});
