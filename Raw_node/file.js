const fs = require('fs')

// fs.mkdir making a directiry asynchronously //

fs.mkdir('Litun',(err) => {
    if(err) {
        console.log(err)
    }
    console.log('Directory creation successful')
})

//const fs = require('fs')

fs.mkdir('Nabil',() => {
    console.log("Directory Created")
})

