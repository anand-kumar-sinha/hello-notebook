const express = require('express')
const User = require('../modules/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const loginuser = require('../middleware/loginuser');
const { trusted } = require('mongoose');


const JWT_SECRET = 'kingisback'

router.post('/signup', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
], async (req, res) => 
{
    let success = false
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({success, error: result.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({success, error: "user id already exits" })
        }


        const salt = await bcrypt.genSalt(10);
        const newPass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET)

        success = true
        res.json({success, jwtToken })
    }catch(error){
        console.error(error.message)
        res.status(500).send("Internal Server Error");
    }

})


// user login term

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password should not be blank').exists(),
], async (req, res) => {

    let success = false
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({ error: "Please Enter username and password carefully" });
    }

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if (!user) {
            success = false
            return res.status(400).json({ success, error: "Enter a valid username or password" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Enter a valid username or password" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET)
        success = true
        res.json({ success, jwtToken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }

})


// user term

router.post('/loginuser', loginuser, async (req, res) => {

    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})



module.exports = router
