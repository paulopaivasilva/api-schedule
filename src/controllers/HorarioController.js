const mongoose = require('mongoose')
const Horarios = mongoose.model('Horarios')

module.exports = {
    async index(req, res){
        const horarios = await Horarios.find()
        return res.json(horarios)
    },

    async store(req, res){
        const horario = await  Horarios.create(req.body)
        return res.json(horario)
    }
}