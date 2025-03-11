require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

sequelize.authenticate()
    .then(() => console.log('✅ Conectado a la base de datos'))
    .catch(err => console.error('❌ Error al conectar:', err));

module.exports = sequelize;
