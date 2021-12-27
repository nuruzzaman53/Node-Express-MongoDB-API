const express = require('express')
const adminRouter = express.Router()

adminRouter.param('user',(req,res,next,id) => {
    req.user = id
    next()
})

adminRouter.get('/dashboard/:user',(req,res) => {
    res.send(`Hello ${req.user}`)
})


adminRouter.get('/income',(req,res) => {
    res.send('Income')
})

adminRouter.use((req,res,next) => {
    res.send('Route Not Found')
    next()
})

module.exports = adminRouter