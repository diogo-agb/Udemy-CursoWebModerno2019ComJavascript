const restFul = require('node-restful')
const mongoose = restFul.mongoose

const appSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    developer: {type: Boolean, required: false, default: false}
})

module.exports = restFul.model('App', appSchema)