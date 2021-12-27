const express = require('express')
const redis = require('redis')
const util = require('util')

/* Redis Databse Connect*/
const redisUrl = "redis://127.0.0.1:6379"
const client = redis.createClient(redisUrl)
if(client){
    console.log('Redis Databse Connected')
}

client.set = util.promisify(client.set)

const app = express()
app.use(express.json())

/* App routing*/

app.post('/',async (req,res) => {
    const { key,value } = req.body;
    const response = await client.set(key,value);
    res.json(response)
})

/* App listening*/
app.listen(3550,() => {
    console.log('App is listening on port 3550')
})