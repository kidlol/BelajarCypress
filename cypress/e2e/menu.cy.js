describe('Check List Manage Activity', () => {
    it('Check Manage Activity',() => { 
      cy.get(':nth-child(2) > .btn').click();
      cy.get('.sidebar-toggle').click();
      cy.wait(1000)
      cy.get(':nth-child(1) > [href="#"]').click();
      cy.wait(1000)
      cy.get('[data-tooltip="Manage Activity"] > a').click();
      cy.wait(1000)
      cy.get('#btn-submit-activity').click();
      cy.wait(1000)
      cy.get('#select2-visit_type_code-container').click();
      cy.wait(1000)
      cy.request({
        method:'GET',
        url:'https://services.mangkujagat.com/crm-api-delivery/api/v1/visit-types?department=scheduler',
        auth:
        {
            bearer:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoic2NoQGdldG5hZGEuY29tIn0sImlzcyI6InN2Yy1jcm0tYWNjb3VudCIsImV4cCI6MTY2ODA3NTAwMCwianRpIjoiTWpBeU1pMHhNUzB4TUNBeE5Ub3hNRG93TUE9PSJ9.Ei7UJlAwuF0-SfbAkHGnHtqwaZg_y5CjaedjvecI29c'
        }})
    })
  })