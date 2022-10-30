const {
    model,
    Schema
} = require('mongoose');

//El siguiente es nuestro modelo
const MateriaSchema = new Schema({
    profeTitular: {
        type: Schema.Types.ObjectId,
        ref: 'personas'
    },
    nombreMateria: {
        type: String,
        required: true
    },
    horarioDesde: {
        type: String
    },
    horarioHasta: {
        type: String
    },

})
//Luego en esta constante estamos creando un objeto el cual va a contener todos los atributos con sus propiedades referidas al modelo

module.exports = model('materias', MateriaSchema);
//Por ultimo exportamos el modelo para utilizarlo en otro lugar