const { DataTypes } = require('sequelize');
const {sequelize, connectDB} = require('../config/database');

connectDB()

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = Produto;
