const Venda = require('../model/vendas');

// Criar uma nova venda
exports.create = async (req, res) => {
    try {
        const venda = await Venda.create(req.body);
        res.status(201).json(venda);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todas as vendas
exports.findAll = async (req, res) => {
    try {
        const vendas = await Venda.findAll();
        res.status(200).json(vendas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obter uma venda pelo ID
exports.findOne = async (req, res) => {
    try {
        const venda = await Venda.findByPk(req.params.id);
        if (venda) {
            res.status(200).json(venda);
        } else {
            res.status(404).json({ message: 'Venda não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar uma venda pelo ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Venda.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedVenda = await Venda.findByPk(req.params.id);
            res.status(200).json(updatedVenda);
        } else {
            res.status(404).json({ message: 'Venda não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Excluir uma venda pelo ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Venda.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Venda excluída' });
        } else {
            res.status(404).json({ message: 'Venda não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
