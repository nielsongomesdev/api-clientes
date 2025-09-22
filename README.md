# API Clientes

API REST para gerenciamento de clientes com Node.js, Express e Prisma.

## Instalação e Execução

```bash
npm install
npx prisma migrate dev
npm start
```

Servidor: `http://localhost:3000`

## Endpoints

**POST /clientes** - Cadastra cliente
```json
{
  "nome": "João Silva",
  "email": "joao@email.com", 
  "telefone": "(11) 99999-9999"
}
```

**GET /ping** - Retorna `pong`