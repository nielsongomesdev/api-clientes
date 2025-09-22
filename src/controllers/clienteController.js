const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCliente = async (request, response) => {
    try {
        const { nome, email, telefone, idente } = request.body;
        const novoCliente = await prisma.cliente.create({
            data: { nome, email, telefone, idente },
        });
        response.status(201).json(novoCliente);
    } catch (error) {
        response.status(400).json({ message: "Erro ao cadastrar cliente", error: error.message });
    }
};

const getAllClientes = async (request, response) => {
    try {
        const clientes = await prisma.cliente.findMany();
        response.status(200).json(clientes);
    } catch (error) {
        response.status(500).json({ message: "Erro ao listar clientes", error: error.message });
    }
};

module.exports = {
    createCliente,
    getAllClientes,
};
