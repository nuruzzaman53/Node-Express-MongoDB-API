// Node JS CORE  http module practices //

const http = require('http')


const server = http.createServer((req,res) => {
    if(req.url == '/home'){
        res.write("<h1>This is Home Page</h1>")
        res.end()
    } else if(req.url ==='/about') {
        res.write("<h1>THis is  About Page</h1>")
        res.end()
    } else {
        res.write("This page has no route")
        res.end()
    }

})

server.listen(4000)

console.log('Server connected on port 4000')

