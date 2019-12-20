const mongoose = require('mongoose')
const Horarios = mongoose.model('Horarios')

module.exports = {
    async index(req, res){
        const horarios = await Horarios.find({})
        return res.json(horarios)
    },

    async store(req, res){
        const horario = await  Horarios.create(req.body)
        return res.json(horario)
    },

    async changeStatus(req, res){
        const horario = await Horarios.update({id: req.id}, {$set: {status: req.status}})
        return res.json(horario)
    }
}