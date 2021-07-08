/// <reference types="cypress"/>
import articles from '../support/pages/articles'
import routes from '../support/routes'

context('Publicação', () => {
    
    beforeEach('Criar um nova publicação', () => {
        routes.init()
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao()
    });
    
    it('Criar uma nova publicação', () =>{
        articles.preencherFormulario()
        articles.submeterPublicacao()
        articles.verificarSeAPublicacaoFoiCadastraComSucesso()
    })
})