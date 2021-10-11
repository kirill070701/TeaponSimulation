const data                      = require('./data')
const position                  = require('./position')


module.exports ={connection: (io)=>{
    io.on('connection', (socket)=>{
        position.data(socket, true)
        data(socket)
        console.log("Пользователь подключен чайник")
    })
}}