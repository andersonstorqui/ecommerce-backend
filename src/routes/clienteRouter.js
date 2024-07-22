const express = require('express')
const app = express()
const router = express.Router()
const clienteController = require('../controllers/clienteControllers')

router.post('/clientes', clienteController.create)
router.get('/clientes/:id', clienteController.findOne)
router.get('/clientes', clienteController.findAll)
router.put('/clientes/:id', clienteController.update)
router.delete('/clientes/:id', clienteController.delete)

module.exports = router