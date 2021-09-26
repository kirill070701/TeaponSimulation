const temperature               = require('./temperature')
const position                  = require('./position')

function dataSocket(socket) {

    socket.on('socket', (msg)=>{
        console.log("данные приняты")
        //console.log(position.position())
        //if (position.position()) {
            let time = 1
                socket.emit('socket', temperature.time(msg[0], msg[1], msg[2], msg[3]));
                
                let interval = setInterval(()=>{
                    //position.data(socket)
                    if (position.position()) {
                        console.log(position.position())
                        socket.emit('socket', temperature.temperatura((time / 60 / 60), msg[0],  msg[1], msg[3]), temperature.time(msg[0], msg[1], msg[2], msg[3]))
                        time += 1
                        if(temperature.temperatura((time / 60 / 60), msg[0],  msg[1], msg[3])>=msg[2]){
                            clearInterval(interval);
                            socket.emit('socket', temperature.temperatura((time / 60 / 60), msg[0],  msg[1], msg[3]))
                        }
                    }
                }, 1000)
                socket.on('disconnect', ()=>{
                    clearInterval(interval);
                })
        //}
    })
    socket.on('disconnect', ()=>{
        console.log('клиент отключен')
    })
}
module.exports = dataSocket