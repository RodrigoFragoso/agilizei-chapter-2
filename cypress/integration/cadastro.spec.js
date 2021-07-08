/// <reference types="cypress"/>
import cadastro from '../support/pages/cadastro'
var faker = require('faker-br');
const userName = faker.internet.userName()
const email = faker.internet.email()

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cadastro.acessarPaginaDeCadastro()
        cadastro.preencherFormularioDeCadastro(userName, email)
        cadastro.submeterFormularioDeCadastro()
        cadastro.verificaLoginComSucesso()
    })

    it('Cadastrar um usuário já cadastrado', () => {
        cadastro.acessarPaginaDeCadastro()
        cadastro.preencherFormularioDeCadastro(userName, email)
        cadastro.submeterFormularioDeCadastro()
        cadastro.verificarLoginComInsucesso()
    })

})
