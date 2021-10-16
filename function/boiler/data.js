const temperature               = require('./temperature')

function dataSocket(socket) {
    socket.on('socketBoiler', (msg)=>{
        console.log("данные приняты")
        let time = 1
        var writeTime = 1
        var position = false
        let intervalT
        var volume = temperature.waterVolume(msg[0])
        let interval = setInterval(()=>{
            time += 1
            socket.emit('socketBoiler', temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]), time*10 / 3600, true)
            writeTime = time
            if(temperature.temperatura(((time * 10) / 60 / 60), msg[0],  msg[1], msg[3])>=msg[2]){
                clearInterval(interval);
                var temperatureN = temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3])
                var timeP
                intervalT = setInterval(()=>{
                    writeTime += 1
                    if ((temperatureN < msg[2] - 10) && (position == true)) {
                        timeP += 1
                        socket.emit('socketBoiler', temperature.temperatura(((timeP * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]), writeTime * 10 / 3600, position, volume)
                        time = 0
                        if (temperature.temperatura((((timeP + 1)  * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]) >= msg[2]) {
                            socket.emit('socketBoiler', temperature.temperatura((((timeP + 1) * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]), writeTime * 10 / 3600, position, volume)
                            position = false
                            temperatureN = temperature.temperatura((((timeP + 1)  * 10)/ 60 / 60), msg[0],  temperatureN, msg[3])
                        }
                    }else if ((temperatureN >= msg[2]-10) && (position == false)) {
                        time += 1
                        socket.emit('socketBoiler', temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]), writeTime * 10 / 3600, position, volume)
                        if (temperature.downgradeTemperature((((time + 1) * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]) < msg[2]-10) {
                            position = true
                            socket.emit('socketBoiler', temperature.downgradeTemperature((((time + 1) * 10)/ 60 / 60), msg[0],  temperatureN, msg[3]), writeTime * 10 / 3600, position, volume)
                            temperatureN = temperature.downgradeTemperature((((time + 1) * 10)/ 60 / 60), msg[0],  temperatureN, msg[3])
                        }
                        timeP = 0
                    }
                    volume = temperature.waterVolume(volume)
                }, 1000)
                //writeTime(socket, temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]), time)
                
            }
        }, 1000)
        
        socket.on('disconnect', ()=>{
            clearInterval(interval);
            clearInterval(intervalT)
        })
    })
}

module.exports = dataSocket