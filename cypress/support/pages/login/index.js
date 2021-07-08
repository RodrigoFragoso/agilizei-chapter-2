const el = require('./elements').ELEMENTS

class Login{
    acessarPaginaDeLogin(){
        cy.visit('/login')
    }

    preencherFormularioDeLogin(){
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type(Cypress.config().user.password)
    }

    submeterFormulario(){
        cy.get(el.buttonPrimary).click()
    }
        
}

export default new Login