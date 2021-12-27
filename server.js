const express = require('express')
const db = require('./models/SequeModel')

const app = express()

db.sequelize.sync().then(() => {
    app.listen(8000,() => {
        console.log('App is listening on port 8000')
    })
})