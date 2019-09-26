
const App = require('./app')

App.methods(['get', 'post', 'put', 'delete'])

App.updateOptions({ new: true, runValidators: true })

module.exports = App