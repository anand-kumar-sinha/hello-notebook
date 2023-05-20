const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    
    res.send('hello my name is anand kumar')
})

module.exports = router
