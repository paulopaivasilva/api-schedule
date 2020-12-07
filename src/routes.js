const express = require('express')
const routes = express.Router()
const productController = require('./controllers/ProductController')
const horarios = require('./controllers/HorarioController')

routes.get('/products', productController.index)
routes.get('/horarios', horarios.index)
routes.post('/horarios', horarios.store)
module.exports = routes