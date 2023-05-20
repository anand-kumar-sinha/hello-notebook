const jwt = require('jsonwebtoken');
const JWT_SECRET = 'kingisback'

const loginuser = (req, res, next) => {

    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "please give a valid details" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({ error: "please give a valid details" })
    }



}


module.exports = loginuser