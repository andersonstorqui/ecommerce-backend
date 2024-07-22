const { DataTypes } = require('sequelize');
const {sequelize, connectDB} = require('../config/database');
const Cliente = require('./cliente');

connectDB()

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'id'
        }
    },
    data_pedido: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'pedidos',
    timestamps: false
});

Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

module.exports = Pedido;
