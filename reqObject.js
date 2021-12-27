const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded())

/* Channel Name : Learn With Sumit Bangladesh */
/* Express Request Object Method */

/*  1. req.baseUrl 
    2. req.originalUrl
    3. req.path
    4. req.hostname
    5. req.method  

*/

app.get('/user/info/:id',(req,res) => {
    console.log(req.originalUrl) /* output  is /user/info */
    console.log(req.path)        /* output  is /user/info */
    console.log(req.hostname)    /* output  is localhost */
    console.log(req.method)      /* output  is GET */
    console.log(req.protocol)    /* output  is http */
    console.log(req.params.id)   /* output  is number 1,2,3, */
    console.log(req.query)       /* { name: 'Nuruzzaman', id: '5' } */
    console.log(req.body)
    console.log(req.secure)     /* return true or false ...return false */
    console.log(req.route)      /* all the route details */
    console.log(req.accepts('json')) /* will be return json if accepts */
    res.send("Request URL Test")  
})




app.listen(5000,() => {
    console.log('Server connected on port 5000')
})