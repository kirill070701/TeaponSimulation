const temperature               = require('./temperature')
var interval                    = require('./colculations/interval')

function dataSocket(socket) {
    socket.on('socketBoiler', (msg)=>{
        console.log("данные приняты")
        interval(msg, socket)
    })
}

module.exports = dataSocket