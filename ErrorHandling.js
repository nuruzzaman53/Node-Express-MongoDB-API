
const express = require('express')
const fs = require('fs')
const app = express()


app.use(express.json())


app.get('/portfolio',(req,res) => {
    res.send(item)
})

app.get('/file',(req,res,next) => {
    fs.readFile('./adding',(err,data) => {
        if(err) {
            next(err)
        }
        res.send(data)
    })
})

app.use((req,res,next) => {
    next('Route is not Available')
})

app.use((err,req,res,next) => {
    if(err.message) {
        res.status(500).send(err.message)
    } else {
        res.status(500).send('There was a server side error')
    }
})

app.listen(6000,() => {
  console.log('Server connected on port 6000')  
})



