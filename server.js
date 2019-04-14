//subindo servidor nodeJS
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')


//iniciando o app
const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/'))
app.use(cors())

//conectando o banco
//mongoose.connect('mongodb://127.0.0.1:27017/nodeapi', {useNewUrlParser: true})
mongoose.connect('mongodb+srv://admin:teste123@progrinter-bjydy.mongodb.net/nodeapi', {useNewUrlParser: true})

//importando o model da schema
requireDir('./src/models')

//definindo resposta da rota raiz
app.use('/', require('./src/routes'))

//porta em que está sendo executado o servidor
//app.listen(3001)
var porta = process.env.PORT || 3001;
app.listen(porta)
