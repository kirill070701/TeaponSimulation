function shipmentPosition(socket, pos) {
    socket.emit('position', pos)
    console.log(pos)
}
