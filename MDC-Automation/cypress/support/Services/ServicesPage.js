import 'cypress-wait-until';

class ServicesPage {

    token() {
        const body = cy.request({
            method: 'POST',
            url: 'http://172.16.17.244:2010/Auth/login',
            headers: {
              'Content-Type': 'application/json'
            },
            body: {       
              "Username": "admin",
              "Password": "admin",
            }
          })
          .then((response) => {
        cy.log(response.body.token)
        window.localStorage.setItem('authce9d77b308c149d5992a80073637e4d5', response.body.token)
    })
    }

    validationService(service) {
        
        cy.login();
        const token = Cypress.env('token');
        cy.log("token: " + token)
        const authorization = `bearer ${ token }`;
        const options = {
            method: 'GET',
            url: `http://172.16.17.244:2032/${ service }/List`,
            headers: {
                authorization,
              }
        }
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("TotalCount: " + response.body.TotalCount)
        })
    }

    
}

export default new ServicesPage