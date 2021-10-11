const data                      = require('./data')

module.exports ={connection: (io)=>{
    io.on('connection', (socket)=>{
        data(socket)
        console.log("Пользователь подключен котел")
    })
}}