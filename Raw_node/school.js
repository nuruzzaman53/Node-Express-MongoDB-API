const EventEmitter = require('events')

const emitter = new EventEmitter()

class School extends EventEmitter {

     periodListener() {
        setTimeout(() => {
            this.emit('First period started')
        })
      }
}


module.exports = School