var temperature                     = require('../temperature')


module.exports = (msg, time, v)=>{
    if (temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) <= 30) {
        return temperature.waterVolume(v, 0.5)
    }else if ((temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) > 30) && (temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) <= 50)) {
        return temperature.waterVolume(v, 1)
    }else if ((temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) > 50) && (temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) <= 80)) {
        return temperature.waterVolume(v, 2)
    }else if ((temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) > 80) && (temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) <= 90)) {
        return temperature.waterVolume(v, 3)
    }else if ((temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) > 90) && (temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) <= 100)) {
        return temperature.waterVolume(v, 4)
    }else if ((temperature.temperatura(((time * 10)/ 60 / 60), msg[0],  msg[1], msg[3]) > 100)) {
        return temperature.waterVolume(v, 6)
    }
}