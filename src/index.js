const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors');



app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


app.use(express.json())

const pedidoRouter = require('./routes/pedidosRouter')
const clienteRouter = require('./routes/clienteRouter')
const estoqueRouter = require('./routes/estoqueRouter')
const produtosRouter = require('./routes/produtosRouter')
const vendasRouter = require('./routes/vendasRouter')



app.use('/', pedidoRouter)
app.use('/', vendasRouter)
app.use('/', clienteRouter)
app.use('/', estoqueRouter)
app.use('/', produtosRouter)




const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`)
})