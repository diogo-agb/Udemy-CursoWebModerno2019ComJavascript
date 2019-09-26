const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express() //start do express (instancia)
const allowCors = require('./cors')

//midleware, sempre que chegar uma requisição que usa o padrão urlencoded que 
//é o padrão usado em formulários, habilitando o extended irá suportar maior tipo de dados
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
