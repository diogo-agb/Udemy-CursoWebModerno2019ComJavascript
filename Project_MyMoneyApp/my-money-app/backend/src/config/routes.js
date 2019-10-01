const express = require('express')

module.exports = function (server) {
    //URL base para todas as rotas
    const router = express.Router();
    server.use('/api', router);

    //Rotas do ciclo de pagamentos
    const BillingCycle = require('../api/billingCycle/billingCycleServices');
    BillingCycle.register(router, '/billingCycles');
};

