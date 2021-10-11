const express                   = require('express')
const app                       = express();
const http                      = require('http').createServer(app);
const io                        = require('socket.io')(http);

const socket                    = require('./function/socket')
const socketBoiler              = require('./function/boiler/socket')
const teapon                    = require('./routes/teapon')
const boiler                    = require('./routes/boiler')

const port                      = process.env.port || 3000 

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/views'))

app.use(teapon)
app.use(boiler)

app.get('/', (req, res)=>{
    //res.render('ejs/index')
})

socketBoiler.connection(io)
socket.connection(io)




http.listen(port, ()=>{
    console.log(`Port- ${port}`)
})
