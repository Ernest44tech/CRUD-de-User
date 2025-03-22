const User = require('../models/User');
const { encryptPassword } = require('./auth'); // Importamos la función para encriptar contraseñas

const createUser = async (data) => {
    // Encriptamos la contraseña antes de guardarla en la BD
    data.password = await encryptPassword(data.password);

    console.log("Contraseña encriptada antes de guardar:", data.password); 

    return await User.create(data);
};

const getAllUsers = async () => await User.findAll();

const getUserById = async (id) => await User.findByPk(id);

const updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    // Si el usuario actualiza la contraseña, se encripta de nuevo
    if (data.password) {
        data.password = await encryptPassword(data.password);
    }

    return await user.update(data);
};

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return user;
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
