const express = require('express');

const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(clienteRoutes);

app.get('/ping', (request, response) => {
    response.send('pong');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});