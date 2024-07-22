const express = require('express')
const app = express()
const router = express.Router()
const produtoController = require('../controllers/produtoControllers')

router.post('/produtos', produtoController.create)
router.get('/produtos/:id', produtoController.findOne)
router.get('/produtos', produtoController.findAll)
router.put('/produtos/:id', produtoController.update)
router.delete('/produtos/:id', produtoController.delete)

module.exports = router