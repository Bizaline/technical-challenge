import {
  getGreeting,
  getModalHeader,
  getBelowTargetHeader,
} from '../support/app.po';

describe('my-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to my-app!');
  });

  it('should open the modal', () => {
    cy.get('button').click();

    getModalHeader().contains('Prestaties');
  });

  it('should open All tab by default', () => {
    cy.get('button').click();

    getBelowTargetHeader().contains('Goal');
  });

  it('should navigate to Below Target tab', () => {
    cy.get('button').click();
    cy.get('button[name="BelowTarget"]').click();

    getBelowTargetHeader().contains('Lorem Ipsum');
  });

  it('should search name 33', () => {
    cy.get('button').click();
    cy.get('input[name="searchInput"]').type('33');

    cy.get('button[name="All"]').contains('19');
  });
});
