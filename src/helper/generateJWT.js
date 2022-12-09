var jwt = require('jsonwebtoken');
const JWT_SECRET  = process.env.SECRET_KEY_JWT;

module.exports = async (payload) => {
    const token = await jwt.sign(payload, JWT_SECRET);
    return token;
}