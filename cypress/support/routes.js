class Routes {
    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticleTitleComments: 'GETArticleTitleComments'
    }

    init(){
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles)
        cy.intercept('GET', '**/api/articles/testando-a-publicacao-**').as(this.as.getArticlesTitle)
        cy.intercept('GET', '**/api/articles/testando-a-publicacao-**/comments').as(this.getArticleTitleComments)
    }
}

export default new Routes