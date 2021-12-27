const School = require('./school')

// taken a blueprint from events module

// register a listener for bellRing event //
emitter.on('bellRing',({period,text,date}) => {
    console.log(`You need to run because ${period} ${text} of ${date}`)
})

periodListener()

console.log('Warning !!!!!!!')

