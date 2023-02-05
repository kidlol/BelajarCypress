const { method } = require("bluebird");

describe('Dashboard Rakamin Academy', ()=> {
    it('Homepage',() =>{
        cy.visit('https://web-staging.rakamin.com/');
        cy.wait(1000);
        cy.get('.sc-cDegIk').click();
        cy.get('.sc-gfzQCe > [data-cy="login-page-button"]').click();
        cy.get('[data-cy="login-email-text-field"]').type('dickycoba@getnada.com');
        cy.get('[data-cy="login-password-text-field"]').type('Kita2123');
        cy.get('[data-cy="login-submit-button"]').click();
        cy.wait(1000);
        cy.get('.sc-cDegIk').click();
        cy.reload();
        cy.scrollTo(0,500);
        cy.wait(1000);
        cy.scrollTo(0,1000);
        cy.wait(1000);
        cy.scrollTo(0,1500);
        cy.wait(1000);
        cy.scrollTo(0,2000);
        cy.wait(1000);
        cy.scrollTo(0,2500);
        cy.wait(1000);
        cy.scrollTo(0,3000);
        cy.wait(1000);
        cy.scrollTo(0,3500);
        cy.wait(1000);
        cy.scrollTo(0,4000);
        cy.wait(1000);
    })
    it('Virtual Internship', () => {
        cy.get('.sc-cDegIk').click();
        cy.get('.sc-cARXMi > [data-cy="vix-dropdown-menu"]').click();
        cy.get('.hQgQNo > [data-cy="explore-vix-navigation"]').click();
        cy.wait(1000);
        // cy.get('[data-cy="confirmation-resume-filling-button"]').click();
        cy.get('[data-cy="profile-page-button"]').click();
    });
    // it('Fill Resume', () => {
    //     cy.get('[data-cy="full-name-text-field"]').type('Dicky Pradana');
    //     cy.get('[data-cy="place-of-birth-text-field"]').type('Malang');
    //     cy.get('[data-cy="date-of-birth-text-field"]').click().type('24 October 1996{enter}');
    // });
})