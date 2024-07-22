const { DataTypes } = require('sequelize');
const {sequelize, connectDB} = require('../config/database');
const Produto = require('./produtos');

connectDB()

const Estoque = sequelize.define('Estoque', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    }
}, {
    tableName: 'estoque',
    timestamps: false
});

Produto.hasMany(Estoque, { foreignKey: 'produto_id' });
Estoque.belongsTo(Produto, { foreignKey: 'produto_id' });

module.exports = Estoque;
