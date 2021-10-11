var button = document.getElementById("continue");

var socket = io.connect()

acceptanceSocket(socket)

function start() {
    dataTransmission(socket)
    document.getElementById("inference").style.display = 'flex';
}

button.onclick = start