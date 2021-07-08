var faker = require('faker-br');
const elements = require('./elements').ELEMENTS
import routes from '../../routes';

class Articles {
    
    acessarFormularioDeNovaPublicacao(){
        cy.get(elements.linkNovaPublicacao).click()
    }

    preencherFormulario(){
        cy.get(elements.inputTitle).type('Testando a publicação')
        cy.get(elements.inputDescription).type('Cypress Test')
        cy.get(elements.textAreaBody).type(faker.lorem.paragraph())
        cy.get(elements.inputTagField).type('cypress')
    }

    submeterPublicacao(){
        cy.get(elements.buttonPrimary).click()
    }
    // `${@variavel}` => Template string
    verificarSeAPublicacaoFoiCadastraComSucesso(){
        cy.wait(`@${routes.as.postArticles}`).then((response) => {
            expect(response.response.statusCode).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticlesTitle}`).then((response) => {
            expect(response.response.statusCode).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticleTitleComments}`).then((response) => {
            expect(response.response.statusCode).to.eq(200)
        })
    }
}

export default new Articles