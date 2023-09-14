const express = require('express')
const router = express.Router()

const collection = require('./collection/routes')

router.use('/collection/', collection)

module.exports = router