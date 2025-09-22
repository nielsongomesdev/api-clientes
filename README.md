# API Clientes

API REST para gerenciamento de clientes com Node.js, Express e Prisma.

## Instalação e Execução

```bash
npm install
npx prisma migrate dev
npm start
```

Servidor: `http://localhost:3000`

## Estrutura do Projeto

```
api-clientes/
├── src/
│   ├── controllers/
│   ├── routes/
│   │   └── clienteRoutes.js
│   └── index.js
├── prisma/
│   ├── schema.prisma
│   ├── dev.db
│   └── migrations/
├── package.json
└── README.md
```

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