const mongoose = require('mongoose')

const HorarioSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    professional: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

mongoose.model('Horarios', HorarioSchema)