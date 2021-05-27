import loginPage from '../page-objects/loginPage'
import navigationBarDashboard from '../page-objects/navigationBarDashboard'

describe('Login test', () => {
    const lp = new loginPage();
    const nav = new navigationBarDashboard();

    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    before(() => {
        cy.visit('/account/login')
    });
    it('should be possible to successfully sign in', () => {
        cy.get(lp.loginInput()).type('automationQA');
        cy.get(lp.passwordInput()).type('Qq@@123456');
        cy.get(lp.loginButton()).click();
        cy.contains('automationQA');
        cy.get(nav.accountButton()).should.exist;
    });
})