const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.createCliente);

router.get('/clientes', clienteController.getAllClientes);

module.exports = router;