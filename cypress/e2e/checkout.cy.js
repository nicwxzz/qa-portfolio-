describe('Checkout', () => {
  beforeEach(() => {
    cy.loginValido()
    cy.adicionarProdutoAoCarrinho()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('CT008 - deve finalizar compra com sucesso', () => {
    cy.fixture('saucedemo').then((dados) => {
      cy.get('[data-test="firstName"]').type(dados.checkout.firstName)
      cy.get('[data-test="lastName"]').type(dados.checkout.lastName)
      cy.get('[data-test="postalCode"]').type(dados.checkout.zipCode)
      cy.get('[data-test="continue"]').click()

      cy.get('[data-test="finish"]').click()

      cy.get('.complete-header').should('have.text', 'Thank you for your order!')
      cy.get('.shopping_cart_badge').should('not.exist')
    })
  })

  it('CT009 - deve exibir erro ao não preencher dados pessoais', () => {
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')
  })
})