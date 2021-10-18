var intervalT                       = require('./intervalT') 
var temperature                     = require('../temperature')
var evaporation                     = require('./evaporation')

module.exports = (msg, socket)=>{
    let time = 1
    var writeTime = 1
    var vprtn
    vprtn = msg[0]
    let interval = setInterval(()=>{
        time += 1
        vprtn = evaporation(msg, time, vprtn)
        socket.emit('socketBoiler', temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]), time*10 / 3600, true, vprtn)
        writeTime = time
        if(temperature.temperatura(((time * 10) / 60 / 60), msg[0],  msg[1], msg[3])>=msg[2]){
            clearInterval(interval);

            var temperatureN = temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3])
            intervalT(time, writeTime, temperatureN, msg, socket, vprtn)
        }
    }, 1000)
    socket.on('disconnect', ()=>{
        clearInterval(interval);
        console.log('отключен котел')
    })
}