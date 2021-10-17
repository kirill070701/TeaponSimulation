const temperature               = require('../temperature')

module.exports = (time, msg, temperatureN)=>{
    if (msg[2] <= 20) {
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.010)
    } else if((msg[2] > 20) && (msg[2] <= 30)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.050)
    }else if((msg[2] > 30) && (msg[2] <= 40)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.150)
    }else if((msg[2] > 40) && (msg[2] <= 50)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.250)
    }else if((msg[2] > 60) && (msg[2] <= 70)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.300)
    }else if((msg[2]> 70) && (msg[2] <= 80)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.350)
    }else if((msg[2] > 80) && (msg[2]-10 <= 90)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.400)
    }else if((msg[2] > 90) && (msg[2] <= 100)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.450)
    }else if((msg[2] > 100) && (msg[2] <= 110)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.500)
    }else if((msg[2] > 110) && (msg[2] <= 120)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.550)
    }else if((msg[2] > 120) && (msg[2] <= 130)){
        return temperature.downgradeTemperature(((time * 10)/ 60 / 60), msg[0],  temperatureN, -0.600)
    }

}