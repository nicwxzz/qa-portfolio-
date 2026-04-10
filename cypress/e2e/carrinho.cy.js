describe('Produtos', () => {
  beforeEach(() => {
    cy.loginValido()
  })

  it('CT004 - deve exibir 6 produtos com nome, descrição, preço e botão', () => {
    cy.get('.inventory_item').should('have.length', 6)

    cy.get('.inventory_item').each((produto) => {
      cy.wrap(produto).find('.inventory_item_name').should('be.visible')
      cy.wrap(produto).find('.inventory_item_desc').should('be.visible')
      cy.wrap(produto).find('.inventory_item_price').should('be.visible')
      cy.wrap(produto).find('button').should('be.visible')
    })
  })

  it('CT005 - deve ordenar produtos por preço do menor ao maior', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')

    cy.get('.inventory_item_price').then((precos) => {
      const valores = [...precos].map((el) =>
        parseFloat(el.innerText.replace('$', ''))
      )
      const ordenado = [...valores].sort((a, b) => a - b)
      expect(valores).to.deep.equal(ordenado)
    })
  })
})