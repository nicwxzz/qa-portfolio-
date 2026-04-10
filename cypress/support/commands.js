// Comando para realizar login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

// Comando para login com usuário válido (atalho)
Cypress.Commands.add('loginValido', () => {
  cy.fixture('saucedemo').then((dados) => {
    cy.login(dados.usuarioValido.username, dados.usuarioValido.password)
  })
})

// Comando para adicionar o primeiro produto ao carrinho
Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
})