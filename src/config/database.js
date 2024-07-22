const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce_dnc', 'root', 'Iva448502@', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,          // Porta padrão do MySQL
  pool: {
      max: 5,           // Número máximo de conexões
      min: 0,           // Número mínimo de conexões
      acquire: 50000,   // Tempo máximo (em milissegundos) que o pool tentará adquirir uma conexão antes de lançar um erro
      idle: 10000       // Tempo máximo (em milissegundos) que uma conexão pode ficar ociosa antes de ser liberada
  },
  dialectOptions: {
      connectTimeout: 50000 // Tempo máximo (em milissegundos) para aguardar uma conexão
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
