/// <reference types="cypress"/>
import login from '../support/pages/login'

// context('Login', { browser: '!firefox' }, () => {
// context('Login', { browser: '!chrome' }, () => {
// context('Login', { browser: '!electron' }, () => {
// context('Login', { browser: 'chrome' }, () => {
// context('Login', { browser: 'electron' }, () => {
// context('Login', { browser: 'firefox' }, () => {

context('Login', () => {
    
    it('Realizar login com sucesso', () => {
        cy.intercept('POST', '**/api/users/login').as('checkLogin')
        cy.intercept('GET', '**/api/tags').as('checkTags')
        cy.intercept('GET', ' /api/articles/feed?limit=10&offset=0').as('checkFeeds')
        
        login.acessarPaginaDeLogin()
        login.preencherFormularioDeLogin()
        login.submeterFormulario()
        
        cy.wait('@checkLogin').then(response => {
            expect(response.response.statusCode).to.eq(200)
        })
        cy.wait('@checkTags').then(response => {
            expect(response.response.statusCode).to.eq(200)
        })
        cy.wait('@checkFeeds').then(response => {
            expect(response.response.statusCode).to.eq(200)
        })
    });

})