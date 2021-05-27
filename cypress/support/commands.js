// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from '../page-objects/loginPage'
import navigationBarDashboard from '../page-objects/navigationBarDashboard'

    const lp = new loginPage();
    const nav = new navigationBarDashboard();

Cypress.Commands.add('login', () => {
    cy.visit('/account/login');
    cy.get(lp.loginInput()).type('automationQA');
    cy.get(lp.passwordInput()).type('Qq@@123456');
    cy.get(lp.loginButton()).click();
    cy.contains('automationQA');
    cy.get(nav.accountButton()).should.exist;
});

Cypress.Commands.add('logout', () => {
    cy.window().its('localStorage').invoke('removeItem', 'session')

    cy.visit('/account/login')
});