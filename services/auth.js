const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

async function encryptPassword(password) {
    console.log("Contraseña recibida para encriptar:", password); 
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Contraseña encriptada:", hashedPassword); 
    return hashedPassword;
}

async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
    encryptPassword,
    comparePassword
};

