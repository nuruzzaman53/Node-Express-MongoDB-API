const express = require('express')
const publicRouter = express.Router({ caseSensitive:true,strict:true })


publicRouter.get('/portfolio',(req,res) => {
    res.send('Portfolio')
})

publicRouter.get('/contact',(req,res) => {
    res.send('Contact')
})

module.exports = publicRouter