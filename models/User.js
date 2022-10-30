const {
    model,
    Schema
} = require('mongoose');

const UsuarioSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
})


module.exports = model('User', UsuarioSchema);