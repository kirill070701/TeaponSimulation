var button                  = document.getElementById("continue");

var socket = io.connect()

var data =[]
document.addEventListener("DOMContentLoaded", function (){
    acceptanceSocket(socket)
})

function sckt(){
    //shipmentPosition(socket, true)
    shipmentSocket(socket)
    document.getElementById("inference").style.display = 'flex';
    prcnt.style.width = percent.value + '%'
    shapePercent.innerHTML = (volume.value / 100 * percent.value).toFixed(1) + "л.";
}

button.onclick = sckt;