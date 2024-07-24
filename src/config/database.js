const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce_dnc', 'root', 'andersondev', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,          
  pool: {
      max: 5,          
      min: 0,          
      acquire: 50000,  
      idle: 10000      
  },
  dialectOptions: {
      connectTimeout: 50000
  }
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados MySQL com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};
module.exports = { sequelize, connectDB };
