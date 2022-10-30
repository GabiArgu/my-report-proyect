const {
    model,
    Schema
} = require('mongoose');
const AvisosSchema = new Schema({
    remitente: {
        type: String,
        required: true
    },
    materia: {
        type: Schema.Types.ObjectId,
        ref: 'materias',
        required: true
    },
    tipo_aviso: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
})

module.exports = model('avisos', AvisosSchema);