# Postman — Testes de API

Testes de API REST utilizando **Postman** aplicados sobre o [Reqres.in](https://reqres.in).

## Como usar

1. Abrir o Postman
2. Clicar em **Import**
3. Selecionar o arquivo `reqres-collection.json` desta pasta
4. Executar as requisições individualmente ou rodar a collection completa

## Endpoints cobertos

| Método | Endpoint         | Descrição              | Status |
|--------|------------------|------------------------|--------|
| GET    | /api/users       | Listar usuários        | 🔲 Pendente |
| GET    | /api/users/:id   | Buscar usuário por ID  | 🔲 Pendente |
| POST   | /api/users       | Criar novo usuário     | 🔲 Pendente |
| PUT    | /api/users/:id   | Atualizar usuário      | 🔲 Pendente |
| DELETE | /api/users/:id   | Remover usuário        | 🔲 Pendente |
| POST   | /api/login       | Autenticar usuário     | 🔲 Pendente |

## O que será validado

- Status code das respostas
- Estrutura e campos do body (JSON)
- Tempo de resposta
- Mensagens de erro para requisições inválidas
