const express = require('express')
const routes = express.Router()
const productController = require('./controllers/ProductController')
const horarios = require('./controllers/HorarioController')

routes.get('/products', productController.index)
routes.post('/products', productController.store)
routes.get('/horarios', horarios.index)
routes.post('/horarios', horarios.store)
routes.post('/horarios/changeStatus', horarios.changeStatus)
module.exports = routes