const User = require('../models/User');

const createUser = async (data) => await User.create(data);
const getAllUsers = async () => await User.findAll();
const getUserById = async (id) => await User.findByPk(id);
const updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(data);
};
const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return user;
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
