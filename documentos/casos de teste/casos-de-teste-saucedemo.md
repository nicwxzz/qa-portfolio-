# Casos de Teste — SauceDemo

## Índice

- [Login](#login)
- [Produtos](#produtos)
- [Carrinho](#carrinho)
- [Checkout](#checkout)

---

## Login

### CT001 — Login com credenciais válidas

| Campo          | Descrição                    |
|----------------|------------------------------|
| **ID**         | CT001                        |
| **Módulo**     | Login                        |
| **Prioridade** | Alta                         |
| **Tipo**       | Funcional                    |

**Pré-condições**
- Página de login acessível em https://www.saucedemo.com

**Passos**
1. Acessar https://www.saucedemo.com
2. Inserir `standard_user` no campo Username
3. Inserir `secret_sauce` no campo Password
4. Clicar em **Login**

**Resultado esperado**
- Usuário redirecionado para `/inventory.html`
- Título "Products" visível na página

**Resultado obtido**
- Usuário redirecionado para a página de produtos com sucesso

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

### CT002 — Login com senha incorreta

| Campo          | Descrição |
|----------------|-----------|
| **ID**         | CT002     |
| **Módulo**     | Login     |
| **Prioridade** | Alta      |
| **Tipo**       | Negativo  |

**Passos**
1. Acessar https://www.saucedemo.com
2. Inserir `standard_user` no campo Username
3. Inserir `senha_errada` no campo Password
4. Clicar em **Login**

**Resultado esperado**
- Mensagem de erro: `Epic sadface: Username and password do not match any user in this service`
- Usuário permanece na página de login

**Resultado obtido**
- Mensagem de erro exibida corretamente

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

### CT003 — Login com campos em branco

| Campo          | Descrição |
|----------------|-----------|
| **ID**         | CT003     |
| **Módulo**     | Login     |
| **Prioridade** | Média     |
| **Tipo**       | Negativo  |

**Passos**
1. Acessar https://www.saucedemo.com
2. Deixar ambos os campos vazios
3. Clicar em **Login**

**Resultado esperado**
- Mensagem de erro: `Epic sadface: Username is required`

**Resultado obtido**
- Mensagem de erro exibida corretamente

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

## Produtos

### CT004 — Visualizar lista de produtos

| Campo          | Descrição  |
|----------------|------------|
| **ID**         | CT004      |
| **Módulo**     | Produtos   |
| **Prioridade** | Alta       |
| **Tipo**       | Funcional  |

**Pré-condições**
- Usuário `standard_user` logado

**Passos**
1. Verificar a página `/inventory.html`

**Resultado esperado**
- 6 produtos exibidos
- Cada produto possui nome, descrição, preço e botão "Add to cart"

**Resultado obtido**
- 6 produtos exibidos corretamente com todos os elementos esperados
- Observação: um dos produtos possui o nome `Test.allTheThings() T-Shirt (Red)`, referência intencional da aplicação à cultura de QA

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

### CT005 — Ordenar produtos por preço (menor ao maior)

| Campo          | Descrição  |
|----------------|------------|
| **ID**         | CT005      |
| **Módulo**     | Produtos   |
| **Prioridade** | Média      |
| **Tipo**       | Funcional  |

**Pré-condições**
- Usuário `standard_user` logado

**Passos**
1. Na página de produtos, clicar no seletor de ordenação
2. Selecionar "Price (low to high)"

**Resultado esperado**
- Produtos reordenados do menor para o maior preço
- Primeiro produto exibe o menor valor

**Resultado obtido**
- Produtos reordenados corretamente do menor para o maior preço

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

## Carrinho

### CT006 — Adicionar produto ao carrinho

| Campo          | Descrição  |
|----------------|------------|
| **ID**         | CT006      |
| **Módulo**     | Carrinho   |
| **Prioridade** | Alta       |
| **Tipo**       | Funcional  |

**Pré-condições**
- Usuário `standard_user` logado

**Passos**
1. Clicar em **Add to cart** em qualquer produto
2. Observar o ícone do carrinho no menu

**Resultado esperado**
- Badge do carrinho exibe `1`
- Botão do produto muda para **Remove**

**Resultado obtido**
- Badge exibido com o número 1 e botão alterado para Remove corretamente

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

### CT007 — Remover produto do carrinho

| Campo          | Descrição  |
|----------------|------------|
| **ID**         | CT007      |
| **Módulo**     | Carrinho   |
| **Prioridade** | Alta       |
| **Tipo**       | Funcional  |

**Pré-condições**
- Usuário logado com ao menos um produto no carrinho

**Passos**
1. Clicar em **Remove** no produto adicionado

**Resultado esperado**
- Badge do carrinho desaparece
- Botão volta para **Add to cart**

**Resultado obtido**
- Badge removido e botão voltou para Add to cart corretamente

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

## Checkout

### CT008 — Fluxo completo de checkout

| Campo          | Descrição  |
|----------------|------------|
| **ID**         | CT008      |
| **Módulo**     | Checkout   |
| **Prioridade** | Alta       |
| **Tipo**       | Funcional  |

**Pré-condições**
- Usuário logado com ao menos um produto no carrinho

**Passos**
1. Clicar no ícone do carrinho
2. Clicar em **Checkout**
3. Preencher First Name, Last Name e Zip Code
4. Clicar em **Continue**
5. Verificar o resumo do pedido
6. Clicar em **Finish**

**Resultado esperado**
- Mensagem de confirmação: `Thank you for your order!`
- Carrinho esvaziado

**Resultado obtido**
- Mensagem de confirmação exibida e carrinho esvaziado com sucesso

**Status:** ✅ Passou

**Executado em:** 13/04/2025

---

### CT009 — Checkout sem preencher dados pessoais

| Campo          | Descrição  |
|----------------|------------|
| **ID**         | CT009      |
| **Módulo**     | Checkout   |
| **Prioridade** | Média      |
| **Tipo**       | Negativo   |

**Pré-condições**
- Usuário logado com ao menos um produto no carrinho

**Passos**
1. Ir até a tela de checkout
2. Deixar todos os campos em branco
3. Clicar em **Continue**

**Resultado esperado**
- Mensagem de erro: `Error: First Name is required`
- Usuário permanece na tela de informações

**Resultado obtido**
- Mensagem de erro exibida corretamente

**Status:** ✅ Passou

**Executado em:** 13/04/2025
