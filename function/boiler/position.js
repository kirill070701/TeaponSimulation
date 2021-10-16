var a 
function dataPosition(socket) {
    socket.on('position', (msg)=>{
        console.log(msg)
        a = msg
    })
}
function position() {
    return a
}

module.exports ={ data:dataPosition,
position:position}