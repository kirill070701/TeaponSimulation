const express               = require('express')
const app                   = express()

app.get('/teapon',(req, res)=>{
    res.render('ejs/index')
})

module.exports = app