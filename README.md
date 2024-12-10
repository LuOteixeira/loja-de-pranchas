# Loja de Pranchas

## Descrição

Backend simples para gerenciamento de estoque de pranchas. Permite o cadastro de pranchas e consulta do estoque.

## Rodando o Projeto

1. Clone o repositório.
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `src/database/connection.ts`.
4. Execute o servidor: `npm run dev` (certifique-se de ter o PostgreSQL configurado).

## Exemplos de Comandos curl

### Consulta ao estoque
```bash
curl -X GET http://localhost:3000/api/pranchas
