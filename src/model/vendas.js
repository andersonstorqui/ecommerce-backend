const { DataTypes } = require('sequelize');
const {sequelize, connectDB} = require('../config/database');
const Pedido = require('./pedidos');
const Produto = require('./produtos');

connectDB()

const Venda = sequelize.define('Venda', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pedido_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'id'
        }
    },
    produto_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Produto,
            key: 'id'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_venda: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'Vendas',
    timestamps: false
});

Pedido.hasMany(Venda, { foreignKey: 'pedido_id' });
Venda.belongsTo(Pedido, { foreignKey: 'pedido_id' });

Produto.hasMany(Venda, { foreignKey: 'produto_id' });
Venda.belongsTo(Produto, { foreignKey: 'produto_id' });

module.exports = Venda;
