var button = document.getElementById("continue");
var volume = document.getElementById("volume")
var percent = document.getElementById("percent")
var temperatureN = document.getElementById("temperatureN")
var temperatureK = document.getElementById("temperatureK")
var powerHeater = document.getElementById("powerHeater")
var p =document.getElementById("degree")
var onoff = document.getElementById("onoff")
var prcnt = document.getElementById("prcnt")
var shapePercent = document.getElementById("shapePercent")
var writeTime = document.getElementById("writeTime")
var stripeTemperature = document.getElementById("stripeTemperature")
var stopa = document.getElementById("stopa")
var starta = document.getElementById("start")
var diagram = document.getElementById("diagram")

var socket = io.connect()
var data =[]
document.addEventListener("DOMContentLoaded", function (){
    socket.on('socket', (msg, ms)=>{
        console.log(msg)
        data.push(msg)
        p.innerHTML=(msg * 1).toFixed(2)
        stripeTemperature.style.width =  100/( temperatureK.value / msg ) + "%"
        if (Number.parseFloat(ms) >=0) {
            writeTime.innerHTML = (ms * 60).toFixed(2) + "мин."
        }
        if (Number.parseInt(msg) >= Number.parseInt(temperatureK.value)) {
            onoff.style.color = "Red"
            onoff.innerHTML = 'Выкл.'
            diagram.style.display = 'flex'
            data.shift(0)
            grafic(data)
            console.log(data)
            data =[]
        }else{
            onoff.style.color = "Green"
            onoff.innerHTML = 'Вкл.'
            
        }
    })
})
function sckt(){
    shipmentPosition(socket, true)
    shipmentSocket(socket)
    console.log(volume.value / 100 * percent.value)
    document.getElementById("inference").style.display = 'flex';
    prcnt.style.width = percent.value + '%'
    shapePercent.innerHTML = (volume.value / 100 * percent.value).toFixed(1) + "л.";
}

button.onclick = sckt;

function shpmntPston() {
    shipmentPosition(socket, false)
    console.log("false")
}

stopa.onclick = shpmntPston

function starts() {
    shipmentPosition(socket, true)
    console.log("false")
}
starta.onclick = starts


