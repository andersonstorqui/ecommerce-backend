const express = require('express')
const app = express()
const { json } = require('body-parser')

const Pedido = require('../model/pedidos');

// Criar um novo pedido
exports.create = async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todos os pedidos
exports.findAll = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obter um pedido pelo ID
exports.findOne = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (pedido) {
            res.status(200).json(pedido);
        } else {
            res.status(404).json({ message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Atualizar um pedido pelo ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Pedido.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPedido = await Pedido.findByPk(req.params.id);
            res.status(200).json(updatedPedido);
        } else {
            res.status(404).json({ message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Excluir um pedido pelo ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Pedido.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json({ message: 'Pedido excluído' });
        } else {
            res.status(404).json({ message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
