Cypress.Commands.add('login', () => { 
    cy.request({
      method: 'POST',
      url: 'https://crm-new.mangkujagat.com/',
      body: {
        user: {
          email: 'sch@getnada.com',
          password: 'CRM24101995',
        }
      }
    })
    .then((resp) => {
      window.localStorage.setItem('jwt', resp.body.user.token)
    })
  
  })