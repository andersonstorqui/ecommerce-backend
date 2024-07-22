const { DataTypes } = require('sequelize');
const {sequelize, connectDB} = require('../config/database');

connectDB()

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'clientes',
    timestamps: false
});

module.exports = Cliente;
