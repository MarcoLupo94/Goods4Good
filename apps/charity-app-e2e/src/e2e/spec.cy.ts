import { getGreeting } from '../support/app.po';

var check = '';
describe('charity-app NOT-authenticated', () => {
  before(() => cy.visit('http://localhost:4200'));

  it('Landing page should have log in button', () => {
    cy.clearCookies();
    cy.get('.mat-button-wrapper').click();
    cy.url().should('contain', 'dev-msv6b2s82hv7ytey.us.auth0.com');
    console.log('current URL:', cy.url());
  });

  it('should allow log in and redirect to home', () => {
    cy.get('input[name=username]').type('test@test.com');
    cy.get('input[name=password]').type('Testing1!');
    cy.get('button[name=action]').click();

    cy.url().should('contain', '/home');
  });
});

describe.only('charity-app AUTHENTICATED', () => {
  before(() => cy.visit('http://localhost:4200'));

  // describe('Load Home Page', () => {
  it('Landing page should have log in button', () => {
    cy.get('.mat-button-wrapper').click();
    cy.url().should('contain', '/home');
    // console.log('current URL:', cy.url());
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

  // it('Charity name should be different after reload', () => {
  //   cy.get('.mat-button-wrapper').click();
  //   cy.get('.mat-card').should('have.length', 10);
  //   cy.get('.mat-card-content')
  //     .first()
  //     .find('h3')
  //     .then(($title) => {
  //       console.log(
  //         'FIRST CHARITY 2nd round:',
  //         $title.text(),
  //         check === $title.text()
  //       );
  //       expect($title.text()).equal(check);
  //     });
  //   // });
  //   // before(() => cy.visit('http://localhost:4200'));
  // });

  //////////////////////////////////////////////////////////////

  // describe('Feature: donate clothes', () => {
  //   describe('Search page', () => {
  //     // before(() => cy.visit('http://localhost:4200'));

  //     it('Search and display result', () => {
  //       // cy.get('.mat-button-wrapper').click();
  //       cy.get('button[name=searchbutton]').click();
  //       cy.get('input[name=search]').type('Climate Change Fund');
  //       cy.get('.mat-card').should('have.length', 11);
  //     });
  //   });

  //   describe('Pick a charity and donate clothes', () => {
  //     //before(() => cy.visit('http://localhost:4200'));

  //     it('Go to charity page', () => {
  //       cy.get('.mat-card-content')
  //         .first()
  //         .find('h3')
  //         .then(($title) => {
  //           expect($title.text()).not.equal('');
  //         });

  //       cy.get('.mat-card-content').first().find('h2').click();
  //       cy.wait(1500);
  //     });

  //     it('Go to charity clothes donation form', () => {
  //       cy.get('.buttons').contains('Donate Clothes').click();
  //       cy.wait(1500);
  //     });

  //     it('Upload an image', () => {
  //       cy.get('input[type=file]').selectFile(
  //         "C:\\Users\\chris\\OneDrive\\Chris' Main Work Folders\\Codeworks Bootcamp\\12 Week Course\\Legacy Project\\charity-app\\apps\\charity-app-e2e\\src\\data\\test.jpg",
  //         { force: true }
  //       );
  //       cy.wait(1500);
  //     });

  //     it('Fill in Donate Clothes form', () => {
  //       cy.get('input[name=title]').type('Test Title');
  //       cy.get('input[name=price]').type('100');
  //       cy.get('input[name=size]').type('M');
  //       cy.get('textarea[name=description]').type(
  //         'This is just a test description'
  //       );
  //       cy.wait(1500);
  //     });

  //     it('Submit Donate Clothes form', () => {
  //       cy.get('button[type=submit]').contains('Donate').click();
  //       cy.wait(1500);
  //     });

  //     it('Navigate to thank you page', () => {
  //       cy.url().should('contain', '/thank-you');
  //       cy.wait(1500);
  //     });
  //   });

  //   describe('Return to home page', () => {
  //     it('Thank you page should have Back to Home button', () => {
  //       cy.get('.mat-button').contains('Back to Home').click();
  //       cy.url().should('contain', '/home');
  //       cy.wait(1500);
  //     });
  //   });
  // });

  //////////////////////////////////////////////////////////////

  // describe('Feature: donate money - custom', () => {
  //   describe('Search page', () => {
  //     // before(() => cy.visit('http://localhost:4200'));

  //     it('Search and display result', () => {
  //       // cy.get('.mat-button-wrapper').click();
  //       cy.get('button[name=searchbutton]').click();
  //       cy.get('input[name=search]').type('Climate Change Fund');
  //       cy.get('.mat-card').should('have.length', 11);
  //       cy.wait(1500);
  //     });
  //   });

  //   describe('Pick a charity and donate money', () => {
  //     it('Go to charity page', () => {
  //       cy.get('.mat-card-content')
  //         .first()
  //         .find('h3')
  //         .then(($title) => {
  //           expect($title.text()).not.equal('');
  //         });

  //       cy.get('.mat-card-content').first().find('h2').click();
  //       cy.wait(1500);
  //     });

  //     it('Go to the charity money donation form', () => {
  //       cy.get('.mat-button').contains('Donate').click();
  //       cy.wait(1500);
  //     });

  //     it('Fill in custom money donation amount', () => {
  //       cy.get('input[name=Donation]').type('88');
  //       cy.wait(1500);
  //     });
  //   });
  // });

  describe('Feature: donate money - predefined', () => {
    describe('Search page', () => {
      // before(() => cy.visit('http://localhost:4200'));

      it('Search and display result', () => {
        // cy.get('.mat-button-wrapper').click();
        cy.get('button[name=searchbutton]').click();
        cy.get('input[name=search]').type('Climate Change Fund');
        cy.get('.mat-card').should('have.length', 11);
        cy.wait(1500);
      });
    });
  });
});
