var jwt = require('jsonwebtoken')

const JWT_SECRET = 'Harryisagoodb$oy'

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please give right token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        console.log(req.user)
        req.user = data.user
        
        console.log(data.user.id)
        next()
    } catch (error) {
        res.send(401).send({ error: "Please give right token" })
    }
}

module.exports = fetchuser