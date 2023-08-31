const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    name: 'index',
    component: [],
    title: 'Калькулятор',
    
    data: {
    },
  })
})

module.exports = router
