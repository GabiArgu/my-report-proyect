const {
    model,
    Schema
} = require('mongoose');

const AsistenciasSchema = new Schema({
    nombre_alumno: {
        type: Schema.Types.ObjectId,
        ref: 'personas'
    },
    materia: {
        type: Schema.Types.ObjectId,
        ref: 'materias',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    asistio: {
        type: Boolean,
        required: true
    },

})

module.exports = model('asistencia', AsistenciasSchema);