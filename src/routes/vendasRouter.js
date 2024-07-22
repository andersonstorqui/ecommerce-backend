const express = require('express')
const app = express()
const router = express.Router()
const vendaController = require('../controllers/vendasControllers')

router.post('/vendas', vendaController.create)
router.get('/vendas/:id', vendaController.findOne)
router.get('/vendas', vendaController.findAll)
router.put('/vendas/:id', vendaController.update)
router.delete('/vendas/:id', vendaController.delete)

module.exports = router