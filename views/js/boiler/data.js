var volume                  = document.getElementById("volume")
var percent                 = document.getElementById("percent")
var temperatureN            = document.getElementById("temperatureN")
var temperatureK            = document.getElementById("temperatureK")
var powerHeater             = document.getElementById("powerHeater")
var p                       =document.getElementById("degree")

function shipmentSocket(socket) {
    socket.emit('socketBoiler', [volume.value / 100 * percent.value, temperatureN.value, temperatureK.value, powerHeater.value])
}
function acceptanceSocket(socket) {
    socket.on('socketBoiler', (msg, ms, position, volumeV)=>{
        console.log(msg)
        console.log(ms)
        p.innerHTML=(msg * 1).toFixed(2)
        stripeTemperature.style.width =  100/( temperatureK.value / msg ) + "%"
        if (Number.parseFloat(ms) >=0) {
            writeTime.innerHTML = (ms * 60).toFixed(2) + "мин."
        }
        if (position == false) {
            onoff.style.color = "Red"
            onoff.innerHTML = 'Выкл.'
            prcnt.style.width = (volumeV / volume.value * 100) + '%'
            shapePercent.innerHTML = (volumeV).toFixed(1) + "л.";
            console.log(volumeV + " ")
        }else if (position == true) {
            onoff.style.color = "Green"
            onoff.innerHTML = 'Вкл.'
            prcnt.style.width = (volumeV / volume.value * 100) + '%'
            shapePercent.innerHTML = (volumeV).toFixed(1) + "л.";
            console.log(volumeV + " ")
        }
    })
}