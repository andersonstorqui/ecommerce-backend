const Produto = require('../model/produtos');

// Criar um novo produto
exports.create = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todos os produtos
exports.findAll = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obter um produto pelo ID
exports.findOne = async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (produto) {
            res.status(200).json(produto);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar um produto pelo ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Produto.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedProduto = await Produto.findByPk(req.params.id);
            res.status(200).json(updatedProduto);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Excluir um produto pelo ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Produto.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Produto excluído' });
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
