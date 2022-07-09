const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router()
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const User = require('../models/User')
var fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Harryisagoodb$oy'
// Create a User using: POST "/api/auth/createuser". No login required

router.post('/createuser', [body('name').isLength({ min: 4 }),
body('email').isEmail(),
body('password').isLength({ min: 3 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const secrectPass = await bcrypt.hash(req.body.password, salt)
        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secrectPass,
            email: req.body.email,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);


        // res.json(user)
        res.json({ authtoken })
    } catch (error) {
        console.log('part called')
        console.error(error.message)
        res.status(500).send("Internal Server Error")

    }



})

// User Authentication using: POST "/api/auth/login". No login required

router.post('/login',

    [body('email').isEmail(),
    body('password').isLength({ min: 3 })], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ error: "Sorry no user exists" })
            }

            const passwordCompare = await bcrypt.compare(req.body.password, user.password)

            if (!passwordCompare) {
                return res.status(400).json({ error: "Please try to login with correct credentials" });
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ authtoken })
        } catch (error) {
            console.log('part called')
            console.error(error.message)
            res.status(500).send("Internal Server Error")

        }



    })


// Get Logged User credentials using: POST "/api/auth/getuser".
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select('-password')
        res.send(user)

    } catch (error) {
        console.log('part called')
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router