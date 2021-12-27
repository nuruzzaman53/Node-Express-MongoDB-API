//console.log(__dirname);

//console.log(__filename);

// console.log(global) 

/* Node JS global object at which following built in function remains

setTimeOut(),
clearInterval(),
clearTimeout(),
setInterval(),
queueMicrotask(),
clearImmediate(),
setImmediate()  

setTimeout(() => {
    console.log('This is setTimeout function')
},1000)

setImmediate(() => {
    console.log(__dirname)
}) */

const fs = require('fs')

//fs.writeFileSync('user.pdf','Nuruzzaman BSC in Mechanical Engineering')

const data = fs.readFileSync('userinfo.txt')

console.log(data.toString())

// toString() function will give the data in string format//


console.log("Directory Location is",__dirname)

console.log("File Location is",__filename)



