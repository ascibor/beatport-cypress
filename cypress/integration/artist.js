import navigationBarDashboard from '../page-objects/navigationBarDashboard'
import artistPage from '../page-objects/artistPage'
import loginPage from "../page-objects/loginPage";

const artist = new artistPage();
const nav = new navigationBarDashboard();

// describe('Artist page with not signed in user', () => {
//
//     beforeEach(() => {
//         cy.viewport(1920, 1080);
//         cy.visit('/');
//
//     });
//
//     it('should not be possible to followw the artist if user is not logged in', () => {
//         cy.visit('/artist/matan-caspi/100983', {failOnStatusCode: false});
//         cy.get(artist.followButton()).click();
//         cy.get('h1').contains("Log in to follow");
//     });
//
// });

describe('Artist page with signed in user', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('/');

    });

    // before(() => {
    //     cy.login();
    // });
    //
    // it('should be possible to follow the artist', () => {
    //     cy.visit('/artist/matan-caspi/100983', {failOnStatusCode: false});
    //     cy.get(artist.followButton()).click();
    //     cy.get('.notif-subject-secondary').contains("You have successfully followed Matan Caspi");
    //
    // });
    //
    // it('should be possible to unfollow the artist', () => {
    //     cy.visit('/artist/matan-caspi/100983', {failOnStatusCode: false});
    //     cy.get(artist.followButton()).click();
    //     cy.get('.notif-subject-secondary').contains("You have successfully unfollowed Matan Caspi");
    //
    // });

    //     it('should be possible to switch to the Tracks tab', () => {
    //     cy.visit('/artist/matan-caspi/100983');
    //     cy.get(artist.tabs()).contains("Tracks").click();
    //     cy.get('.bucket-track-header').should("be.visible")
    // });

    it('should be possible to switch to the Releases tab', () => {
        cy.visit('/artist/matan-caspi/100983');
        cy.get(artist.tabs()).contains("Releases").click();
        cy.get('.bucket-track-header').should("be.visible");
    });


});