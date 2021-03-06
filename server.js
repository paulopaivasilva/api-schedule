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
uri = 'mongodb+srv://admin_1:admin@progrinter.bjydy.mongodb.net/nodeapi?authSource=admin&replicaSet=progrinter-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'

//conectando o banco
mongoose.connect(uri, {useNewUrlParser: true})


//importando o model da schema
requireDir('./src/models')

//definindo resposta da rota raiz
app.use('/api', require('./src/routes'))

//porta em que está sendo executado o servidor
//app.listen(3001)
var porta = process.env.PORT || 3001;
app.listen(porta)
