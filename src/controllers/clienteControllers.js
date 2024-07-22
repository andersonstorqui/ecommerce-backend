const Cliente = require('../model/cliente');

// Criar um novo cliente
exports.create = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todos os clientes
exports.findAll = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obter um cliente pelo ID
exports.findOne = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar um cliente pelo ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Cliente.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCliente = await Cliente.findByPk(req.params.id);
            res.status(200).json(updatedCliente);
        } else {
            res.status(404).json({ message: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Excluir um cliente pelo ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Cliente.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Cliente excluído' });
        } else {
            res.status(404).json({ message: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
