const el = require('./elements').ELEMENTS

class Cadastro{
    acessarPaginaDeCadastro(){
        cy.visit('/register')
    }

    preencherFormularioDeCadastro(userName, email){
        cy.get(el.inputUserName).type(userName)
        cy.get(el.inputEmail).type(email)
        cy.get(el.inputPassword).type('12345678')
    }

    submeterFormularioDeCadastro(){
        cy.get(el.buttonPrimary).click()
    }

    verificaLoginComSucesso(){
        cy.contains(el.messageSuccess)
    }

    verificarLoginComInsucesso(){
        cy.contains(el.messageInsucess)
    }
}

export default new Cadastro