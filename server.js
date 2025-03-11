const express = require('express');
const app = express();
const sequelize = require('./config/database');
const userRoutes = require('./routes/api/user');

app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync().then(() => console.log('📦 Base de datos sincronizada'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
