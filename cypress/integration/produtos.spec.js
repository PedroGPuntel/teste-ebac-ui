/// <reference types ="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //first(pega o primeiro item da lista)
            //last(pega o último item da lista)
            //.eq(3) - pega o item pela sua posição - a lista sempre começa pelo 0, então 4 da lista recebe 3
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt').click()

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        
    });

});
