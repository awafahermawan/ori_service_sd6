const express = require('express');
const routes = express.Router(); 
const Controller = require('./controllers')
const auth = require('../auth')
const logger = require('./../logger')
const moment = require('moment')

routes.post("/", auth.isAuth, async(req, res) => {
    let data = await Controller.insert(req)
    let ListLog = [0, '-', 'ORIServiceSD6', 'Insert Sales', 'Collection', req.originalUrl, data.code, req.method, data.message, JSON.stringify(req.headers), JSON.stringify({}), JSON.stringify({}), JSON.stringify({}), 0, JSON.stringify(data), data.rows, data.error || '-', 'H2H', req.clientIp, 'v1.0.0', moment().format('YYYY-MM-DD hh:mm:ss'), 'ORIServiceSD6']
    await logger.insert(ListLog)   
    res.status(200).json(data);
})

routes.put("/", auth.isAuth, async(req, res) => {
    let data = await Controller.update(req)
    let ListLog = [0, '-', 'ORIServiceSD6', 'Update Status Sales', 'Collection', req.originalUrl, data.code, req.method, data.message, JSON.stringify(req.headers), JSON.stringify({}), JSON.stringify({}), JSON.stringify({}), 0, JSON.stringify(data), data.rows, data.error || '-', 'H2H', req.clientIp, 'v1.0.0', moment().format('YYYY-MM-DD hh:mm:ss'), 'ORIServiceSD6']
    await logger.insert(ListLog)   
    res.status(200).json(data);
})

module.exports = routes;