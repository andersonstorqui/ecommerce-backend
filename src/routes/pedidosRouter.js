const express = require('express')
const app = express()
const router = express.Router()
const pedidoController = require('../controllers/pedidoControllers')

router.post('/pedidos', pedidoController.create)
router.get('/pedidos/:id', pedidoController.findOne)
router.get('/pedidos', pedidoController.findAll)
router.put('/pedidos/:id', pedidoController.update)
router.delete('/pedidos/:id', pedidoController.delete)

module.exports = router