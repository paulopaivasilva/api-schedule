const express = require('express')
const routes = express.Router()
const productController = require('./controllers/ProductController')
const horarios = require('./controllers/HorarioController')

routes.get('/products', productController.index)
routes.post('/products', productController.store)
routes.get('/horarios', horarios.index)
routes.post('/horarios', horarios.store)

/* routes.get('/products', (req, res) => {
    /* Horarios.create({
        date: "hoje",
        hour: "this.state.hour",
        professional: "this.state.professional",
        name: "this.state.name",
        type: "this.state.type",
    }) */
    /* Product.create({
        title: "React Native",
        description: "Build apps with React Native",
        url: "http://www.google.com.br"
    })
    
}) */
module.exports = routes