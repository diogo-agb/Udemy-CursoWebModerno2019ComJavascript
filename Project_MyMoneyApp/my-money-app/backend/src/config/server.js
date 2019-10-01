const port = 3003;
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('./cors');

//Middleware aplicado na aula, porém não foi necessário para resolver o problema
//devido talvez nova versão do express
const queryParser = require('express-query-int');


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());



server.listen(port, () => (
    console.log(`BACKEND is running on port ${port}.`)
));

module.exports = server;

