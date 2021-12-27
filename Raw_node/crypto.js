const crypto = require('crypto')

const secretCode = 'nabil123456'

// createHmac()	 => Creates a Hmac object using the specified hashing algorithm and key

// HMAC = > Hash-based message authentication codes

//const hashedCode = crypto.createHmac('sha256',secretCode).digest('hex')

const hashedCode = crypto.createHmac('sha256',secretCode).digest('hex')

console.log("Hashed Code is ", hashedCode)



