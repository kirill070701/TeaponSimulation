const temperature               = require('./temperature')
var interval                    = require('./colculations/interval')

function dataSocket(socket) {
    socket.on('socketBoiler', (msg)=>{
        console.log("данные приняты")
        interval(msg, socket)
        
        socket.on('disconnect', ()=>{
            try {
                clearInterval(interval);
                clearInterval(intervalT)
            } catch (error) {
                
            }
            
        })
    })
}

module.exports = dataSocket