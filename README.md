# QA Portfolio

Portfólio de Quality Assurance com foco em automação de testes E2E e testes de API, aplicado sobre aplicações públicas de referência.

---

## Sobre mim

Profissional de QA com experiência em testes manuais e automação. Este repositório reúne projetos práticos que demonstram domínio em ferramentas de automação, organização de documentação e boas práticas de qualidade de software.

- 🔗 LinkedIn: [linkedin.com/in/nicwxz](https://www.linkedin.com/in/nicwxz))
- 📧 Email: nicolasnoliveira2009@outlook.com

---

## Estrutura do Repositório

```
qa-portfolio/
│
├── 📂 cypress/               # Testes E2E com Cypress
│   ├── e2e/                  # Specs de teste
│   │   ├── login.cy.js
│   │   ├── produtos.cy.js
│   │   ├── carrinho.cy.js
│   │   └── checkout.cy.js
│   ├── fixtures/             # Dados de teste (JSON)
│   │   └── saucedemo.json
│   ├── support/              # Comandos customizados
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── cypress.config.js
│   └── package.json
│
├── 📂 postman/               # Testes de API com Postman
│
├── 📂 documentos/            # Documentação de QA
│   ├── casos-de-teste/
│   ├── plano-de-testes/
│   └── relatorio-de-bugs/
│
└── README.md
```

---

## Tecnologias Utilizadas

| Ferramenta | Finalidade              | Aplicação testada |
|------------|-------------------------|-------------------|
| Cypress    | Testes E2E (UI)         | SauceDemo         |
| Postman    | Testes de API REST      | Reqres.in         |

---

## Aplicações Testadas

| Aplicação   | URL                        | Tipo     |
|-------------|----------------------------|----------|
| SauceDemo   | https://www.saucedemo.com  | E2E / UI |
| Reqres.in   | https://reqres.in          | API REST |

---

## Como Executar

### Cypress

**Pré-requisitos:** Node.js 18+

```bash
cd cypress
npm install
npx cypress open        # modo interativo
npx cypress run         # modo headless (CI)
```

### Postman

1. Abrir o Postman
2. Importar o arquivo `.json` da pasta `postman/`
3. Selecionar o environment e executar a collection

---

## Documentação

| Documento | Descrição |
|-----------|-----------|
| [Casos de Teste](./documentos/casos-de-teste/casos-de-teste-saucedemo.md) | Cenários de teste do SauceDemo |
| [Plano de Testes](./documentos/plano-de-testes/plano-de-testes.md) | Estratégia, escopo e critérios |
| [Relatório de Bugs](./documentos/relatorio-de-bugs/relatorio-de-bugs.md) | Bugs identificados durante os testes |

---

## Cenários Cobertos

### SauceDemo — Cypress (E2E)
- ✅ CT001 — Login com credenciais válidas
- ✅ CT002 — Login com senha incorreta
- ✅ CT003 — Login com campos em branco
- ✅ CT004 — Visualizar lista de produtos
- ✅ CT005 — Ordenar produtos por preço (menor ao maior)
- ✅ CT006 — Adicionar produto ao carrinho
- ✅ CT007 — Remover produto do carrinho
- ✅ CT008 — Fluxo completo de checkout
- ✅ CT009 — Checkout sem preencher dados pessoais

### Reqres.in — Postman (API)
- 🔲 GET /users — listagem de usuários
- 🔲 POST /users — criação de usuário
- 🔲 PUT /users/:id — atualização de usuário
- 🔲 DELETE /users/:id — remoção de usuário
- 🔲 POST /login — autenticação

---

## 📬 Contato

Aberto a oportunidades e feedbacks! Fique à vontade para abrir uma issue ou me contatar pelo LinkedIn.
