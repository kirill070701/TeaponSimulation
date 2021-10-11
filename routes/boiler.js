const express               = require('express')
const app                   = express()

app.get('/boiler', (req,res)=>{
    res.render('ejs/boiler')
})

module.exports = app