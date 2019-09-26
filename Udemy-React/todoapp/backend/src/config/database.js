const mongoose = require('mongoose')

// A API do mongoose estava exibindo uma msg de advertencia sobre a versao da Promise, 
//o professor então referenciou a Promise do Node para essa msg parar de ser exibida
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')



