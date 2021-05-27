import loginPage from '../page-objects/loginPage'
import navigationBarDashboard from '../page-objects/navigationBarDashboard'

describe('Search test', () => {
    const lp = new loginPage();
    const nav = new navigationBarDashboard();

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('/');

    })

    before(() => {
        cy.login();
    });

    it('should be possible to go directly to /search URL',() => {
        cy.visit('/search', {failOnStatusCode: false});
        cy.contains('Return to Homepage').should.exist;
        cy.get('.error-image').should.exist;
    });

    it('should be possible to submit empty search imput',() => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('{enter}');
        cy.contains('Return to Homepage').should.exist;
        cy.get('.error-image').should.exist;
    });

    it('should be possible to search by the whole name of artist', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('MATAN CASPI').type('{enter}');
        cy.get('.artist-name').contains("Matan Caspi");

    });

    it('should be possible to search by the first name of artist', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('MATAN').type('{enter}');
        cy.get('.artist-name').contains("Matan Caspi");
    });

    it('should be possible to search by the last name of artist', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('CASPI').type('{enter}');
        cy.contains("Matan Caspi").should.exist;
    });

    it('should be possible to search by partial name of artist', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('MATA CASP').type('{enter}');
        cy.contains("Matan Caspi").should.exist;
    });

    it('should be possible to search by track title', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('MATA montana').type('{enter}');
        cy.contains("Mata Montana").should.exist;
    });

    it('should be possible to search using lower case characters', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('mata montana').type('{enter}');
        cy.contains("Mata Montana").should.exist;
    });

    it('should be possible to search using lower case characters', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('mata montana').type('{enter}');
        cy.contains("Mata Montana").should.exist;
    });

    it('should be possible to scroll the list of results', () => {
        cy.get(nav.searchInput(), {failOnStatusCode: false}, {force: true}).click().type('mata').type('{enter}');
        cy.scrollTo('bottom');
        cy.get('.footer-logo').should('be.visible');
    });

    after(()=> {
        cy.logout();
    });
});