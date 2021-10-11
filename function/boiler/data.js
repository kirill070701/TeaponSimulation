const temperature               = require('./temperature')

function dataSocket(socket) {
    socket.on('socketBoiler', (msg)=>{
        console.log("данные приняты")
        let time = 1
        let interval = setInterval(()=>{
            time += 1
            socket.emit('socketBoiler', temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]), time*10 / 3600)
            
            if(temperature.temperatura(((time * 10) / 60 / 60), msg[0],  msg[1], msg[3])>=msg[2]){
                clearInterval(interval);
                writeTime(socket, temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]), time)
                
            }
        }, 1000)
        socket.on('disconnect', ()=>{
            clearInterval(interval);
        })
    })
    socket.on('disconnect', ()=>{
        console.log('клиент отключен')
        //socket.emit('socketBoiler', time * 10 / 3600)
    })
}

function writeTime(socket, temperature, time) {
    setTimeout(() => {
        setInterval(() => {
            socket.emit('socketBoiler',temperature, time * 10 / 3600)
            time +=1
        }, 1000);
    }, 0);
}

module.exports = dataSocket