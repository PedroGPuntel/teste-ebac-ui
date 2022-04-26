/// <reference types ="cypress" />

context('Funcionalidade teste', () =>{

    it('Deve fazer Login com sucesso',() =>{
        cy.visit('https://demo.privacytools.com.br/login')
        cy.get('#email').type('pedro.guedes@privacytools.com.br')
        cy.get('#password').type('4+fy+260R.}>z1XA')
        cy.get('.btn').click()
        cy.get('#pin').type('765730')
        cy.get('.form-validate > :nth-child(4)').click()   
        
        cy.get('[href="#webtools"]').click()
        cy.get('#webtools > :nth-child(1) > a').click()
        cy.get('#website').select('Website Privacy Tools - www.privacytools.com.br')
        cy.get('.col-sm-4 > .btn').click()

    })
   
})