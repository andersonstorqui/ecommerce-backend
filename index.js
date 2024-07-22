const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const sequelize = require('./src/config/database');
const cors = require('cors');



app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


app.use(express.json())

const pedidoRouter = require('./src/routes/pedidosRouter')
const clienteRouter = require('./src/routes/clienteRouter')
const estoqueRouter = require('./src/routes/estoqueRouter')
const produtosRouter = require('./src/routes/produtosRouter')
const vendasRouter = require('./src/routes/vendasRouter')


app.use('/pedido', pedidoRouter)

app.use('/pedidos', pedidoRouter)

app.use('/vendas', vendasRouter)
app.use('/venda', vendasRouter)
app.use('/cliente', clienteRouter)
app.use('/clientes', clienteRouter)
app.use('/estoque', estoqueRouter)
app.use('/estoques', estoqueRouter)
app.use('/produto', produtosRouter)
app.use('/produtos', produtosRouter)


module.exports = app;