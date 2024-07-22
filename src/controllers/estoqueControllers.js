const Estoque = require('../model/estoque');

// Criar um novo estoque
exports.create = async (req, res) => {
    try {
        const estoque = await Estoque.create(req.body);
        res.status(201).json(estoque);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todos os estoques
exports.findAll = async (req, res) => {
    try {
        const estoques = await Estoque.findAll();
        res.status(200).json(estoques);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obter um estoque pelo ID
exports.findOne = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);
        if (estoque) {
            res.status(200).json(estoque);
        } else {
            res.status(404).json({ message: 'Estoque não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar um estoque pelo ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Estoque.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedEstoque = await Estoque.findByPk(req.params.id);
            res.status(200).json(updatedEstoque);
        } else {
            res.status(404).json({ message: 'Estoque não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Excluir um estoque pelo ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Estoque.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Estoque excluído' });
        } else {
            res.status(404).json({ message: 'Estoque não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
