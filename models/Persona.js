const {
    model,
    Schema,
    mongoose
} = require('mongoose');

const PersonaSchema = new Schema({
    nombre_y_apellido: {
        type: String,
    
    },
    dni: {
        type: String,
  
    },
    email: {
        type: String,

    },
    rol: {
        type: String,

    },
    fecha_nacimiento: {
        type: String,

    },
    telefonos: [{
        tipo_telefono: {
            type: String,
        },
        numero_Telefono: {
            type: String
        }
    }],
    direccion: {

        type: String,
    },

})

module.exports = model('personas', PersonaSchema);