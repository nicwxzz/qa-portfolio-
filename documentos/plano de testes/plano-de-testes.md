# Plano de Testes — QA Portfolio

## 1. Identificação

| Campo           | Descrição               |
|-----------------|-------------------------|
| **Projeto**     | QA Portfolio — SauceDemo|
| **Versão**      | 1.0                     |
| **Responsável** | Nicolas                 |
| **Data**        | 13/04/2025              |

---

## 2. Objetivo

Validar as funcionalidades principais da aplicação SauceDemo, garantindo que os fluxos de autenticação, navegação de produtos, gerenciamento do carrinho e checkout funcionem conforme o esperado. Os testes são executados de forma manual e automatizada via Cypress.

---

## 3. Escopo

### Dentro do escopo

**SauceDemo (Cypress)**
- Autenticação (login e logout)
- Listagem, ordenação e filtragem de produtos
- Gerenciamento do carrinho
- Fluxo completo de checkout

**Reqres.in (Postman)**
- CRUD de usuários via API REST
- Autenticação via API

### Fora do escopo
- Testes de performance e carga
- Testes de segurança
- Compatibilidade em dispositivos móveis

---

## 4. Ferramentas

| Ferramenta | Versão  | Finalidade             |
|------------|---------|------------------------|
| Cypress    | 12+     | Testes E2E             |
| Postman    | Atual   | Testes de API          |
| GitHub     | —       | Versionamento          |

---

## 5. Ambientes

| Ambiente   | URL                          |
|------------|------------------------------|
| SauceDemo  | https://www.saucedemo.com    |
| Reqres.in  | https://reqres.in            |

---

## 6. Critérios de Entrada

- Ambiente de testes disponível e acessível
- Credenciais de teste documentadas e funcionando
- Casos de teste revisados

## 7. Critérios de Saída

- 100% dos casos de alta prioridade executados
- Nenhum bug crítico ou bloqueante em aberto
- Relatório de execução gerado com evidências

---

## 8. Tipos de Teste

| Tipo             | Descrição                                              |
|------------------|--------------------------------------------------------|
| Funcional        | Validação dos fluxos esperados pelo usuário            |
| Negativo         | Validação do comportamento com dados inválidos         |
| Regressão        | Re-execução da suite completa após mudanças            |

---

## 9. Riscos

| Risco                          | Probabilidade | Impacto | Mitigação                         |
|--------------------------------|---------------|---------|-----------------------------------|
| Ambiente indisponível          | Baixa         | Alto    | Monitorar antes de cada execução  |
| Mudança na UI sem aviso        | Média         | Médio   | Revisar seletores periodicamente  |
| Falhas de rede intermitentes   | Baixa         | Médio   | Retry configurado no Cypress      |

---

## 10. Resultado da Execução

| ID    | Caso de Teste                              | Status      | Data       |
|-------|--------------------------------------------|-------------|------------|
| CT001 | Login com credenciais válidas              | ✅ Passou   | 13/04/2025 |
| CT002 | Login com senha incorreta                  | ✅ Passou   | 13/04/2025 |
| CT003 | Login com campos em branco                 | ✅ Passou   | 13/04/2025 |
| CT004 | Visualizar lista de produtos               | ✅ Passou   | 13/04/2025 |
| CT005 | Ordenar produtos por preço                 | ✅ Passou   | 13/04/2025 |
| CT006 | Adicionar produto ao carrinho              | ✅ Passou   | 13/04/2025 |
| CT007 | Remover produto do carrinho                | ✅ Passou   | 13/04/2025 |
| CT008 | Fluxo completo de checkout                 | ✅ Passou   | 13/04/2025 |
| CT009 | Checkout sem preencher dados pessoais      | ✅ Passou   | 13/04/2025 |

**Total: 9 casos executados — 9 passaram — 0 falharam**
