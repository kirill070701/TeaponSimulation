const temperature               = require('../temperature')
const evaporation               = require('./evaporation')
const cooling                   = require('./cooling')


var timeP
var position = false
var vprtn

module.exports = (time, writeTime, temperatureN, msg, socket, vprtn)=>{
    //vprtn = msg[0]
    //var volume = temperature.waterVolume(msg[0])
    intervalT = setInterval(()=>{
        writeTime += 1
        if ((temperatureN < msg[2] - 10) && (position == true)) {
            timeP += 1
            vprtn = evaporation(msg, timeP, vprtn)
            socket.emit('socketBoiler', temperature.temperatura(((timeP * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]), writeTime * 10 / 3600, position, vprtn)
            time = 0
    
            if (temperature.temperatura((((timeP + 1)  * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]) >= msg[2]) {
                vprtn = evaporation(msg, timeP + 1, vprtn)
                socket.emit('socketBoiler', temperature.temperatura((((timeP + 1) * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]), writeTime * 10 / 3600, position, vprtn)
                position = false
                temperatureN = temperature.temperatura((((timeP + 1)  * 10)/ 60 / 60), msg[0],  temperatureN, msg[3])
            }
    
        }else if ((temperatureN >= msg[2]-10) && (position == false)) {
            time += 1
            vprtn = evaporation(msg, time, vprtn)
            socket.emit('socketBoiler', cooling(time, msg, temperatureN), writeTime * 10 / 3600, position, vprtn)
            timeP = 0
            
            if (cooling(time, msg, temperatureN) < msg[2]-10) {
                position = true
                vprtn = evaporation(msg, time + 1, vprtn)
                socket.emit('socketBoiler', cooling(time, msg, temperatureN), writeTime * 10 / 3600, position, vprtn)
                temperatureN = cooling(time, msg, temperatureN)
            }
        }
        //volume = temperature.waterVolume(volume)
    }, 1000)
    socket.on('disconnect', ()=>{
        clearInterval(intervalT)
    })
}