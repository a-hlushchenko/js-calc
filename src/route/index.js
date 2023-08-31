const express = require('express')
const router = express.Router()

const calc = require('./calc')
router.use('/', calc)

module.exports = router
