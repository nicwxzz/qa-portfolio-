describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('CT001 - deve realizar login com credenciais válidas', () => {
    cy.fixture('saucedemo').then((dados) => {
      cy.get('[data-test="username"]').type(dados.usuarioValido.username)
      cy.get('[data-test="password"]').type(dados.usuarioValido.password)
      cy.get('[data-test="login-button"]').click()

      cy.url().should('include', '/inventory.html')
      cy.get('.title').should('have.text', 'Products')
    })
  })

  it('CT002 - deve exibir erro ao inserir senha incorreta', () => {
    cy.fixture('saucedemo').then((dados) => {
      cy.get('[data-test="username"]').type(dados.usuarioInvalido.username)
      cy.get('[data-test="password"]').type(dados.usuarioInvalido.password)
      cy.get('[data-test="login-button"]').click()

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match any user in this service')
    })
  })

  it('CT003 - deve exibir erro ao deixar campos em branco', () => {
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')
  })
})