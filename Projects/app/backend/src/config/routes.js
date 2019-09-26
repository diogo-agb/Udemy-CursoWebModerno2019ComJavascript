const express = require('express')

module.exports = function (server){
    // API Route
    const routes = express.Router()
    server.use('/api', routes)

    //API appService
    const appService = require('../api/app/appService')
    appService.register(routes, '/apps')
}