var volume = document.getElementById("volume")
var percent = document.getElementById("percent")
var temperatureN = document.getElementById("temperatureN")
var temperatureK = document.getElementById("temperatureK")
var powerHeater = document.getElementById("powerHeater")

function shipmentSocket(socket) {
    socket.emit('socket', [volume.value / 100 * percent.value, temperatureN.value, temperatureK.value, powerHeater.value])
}
function acceptanceSocket(socket) {
    socket.on('socket', (msg, ms)=>{
        console.log(msg)
        console.log(ms)
        p.innerHTML=(msg * 1).toFixed(2)
        stripeTemperature.style.width =  100/( temperatureK.value / msg ) + "%"
        if (Number.parseFloat(ms) >=0) {
            writeTime.innerHTML = (ms * 60).toFixed(2) + "мин."
        }
        if (Number.parseInt(msg) >= Number.parseInt(temperatureK.value)) {
            onoff.style.color = "Red"
            onoff.innerHTML = 'Выкл.'
        }else{
            onoff.style.color = "Green"
            onoff.innerHTML = 'Вкл.'
        }
    })
}

