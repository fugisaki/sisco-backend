const express = require('express')

const routes = express.Router()

routes.get('/', (_, res) => {
  return res.json('Olá')
})

module.exports = routes
