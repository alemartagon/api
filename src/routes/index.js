var router = require('express').Router()
  var hombres = require('./hombres')
  var mujeres = require('./mujeres')

  router.use('/hombres', hombres)
  router.use('/mujeres', mujeres)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a mi API creada por Alejandro Martagon Reina' })
  })

  module.exports = router