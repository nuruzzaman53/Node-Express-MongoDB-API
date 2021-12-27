const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        const myStream = fs.ReadStream(`${__dirname}/welcome.txt`)
        myStream.on('data',(chunk) => {
            console.log(chunk.toString())
        })

    } else if(req.url ==='/about') {
        res.write("<h1>About Page</h1>")
        res.end()

    } else if(req.url === '/contact') {
        res.write(`
              <h1>Contact Us</h1>
              <form>
                   <label>Name</label>
                   <input type='text' placeholder='Name' />
                   <label>Password</label>
                   <input type='password' placeholder='pass' />
            </form>
        `)
    }

})

server.listen(4500)

console.log("Server connected on port 4500")