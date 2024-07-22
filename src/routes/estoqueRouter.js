const express = require('express')
const app = express()
const router = express.Router()
const estoqueController = require('../controllers/estoqueControllers')

router.post('/estoque', estoqueController.create)
router.get('/estoque/:id', estoqueController.findOne)
router.get('/estoque', estoqueController.findAll)
router.put('/estoque/:id', estoqueController.update)
router.delete('/estoque/:id', estoqueController.delete)

module.exports = router