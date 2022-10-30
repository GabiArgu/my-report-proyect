const {
    model,
    Schema
} = require('mongoose');

const NotasSchema = new Schema({
    nombre_alumno: {
        type: Schema.Types.ObjectId,
        ref: 'personas'
    },
    carrera: {
        type: String,
        required: true,

    },
    grado: {
        type: String,
        required: true
    },
    materia: {
        type: String,
        required: true
    },
    tipo_examen: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true
    },

})

module.exports = model('notas', NotasSchema);