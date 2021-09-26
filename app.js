const express                   = require('express')
const app                       = express();
const http                      = require('http').createServer(app);
const io                        = require('socket.io')(http);

const socket                    = require('./function/socket')

const port                      = process.env.port || 3000 

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/views'))

app.get('/', (req, res)=>{
    res.render('ejs/index')
})

socket.connection(io)



http.listen(port, ()=>{
    console.log(`Port- ${port}`)
})
