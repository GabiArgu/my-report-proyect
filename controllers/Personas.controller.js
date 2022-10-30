const personaModelo = require('../models/Persona')

const getPersonas = async (req, res) => {
    const datos = await personaModelo.find({})
    return res.json({
        mensaje: "personas encontradas",
        encontrados: datos
    })
}

const postPersonas = async (req, res) => {
    const {
        nombre_y_apellido,
        dni,
        email,
        rol,
        fecha_nacimiento,
        telefonos,
        direccion
    } = req.body

    const newPersona = new personaModelo({
        nombre_y_apellido,
        dni,
        email,
        rol,
        fecha_nacimiento,
        telefonos,
        direccion

    })
    try {
        const personas = await newPersona.save()
        return res.json({
            mensaje: "Persona guardada",
            encontrados: personas
        })
    } catch (error) {
        res.json({
            mensaje: "Error al guardar la persona",
            error
        })
    }



}

const putPersonas = async (req, res) => {
    const {
        id
    } = req.params
    const {
        nombre_y_apellido,
        dni,
        email,
        rol,
        fecha_nacimiento,
        telefonos,
        direccion
    } = req.body
    const update = {}


    if (nombre_y_apellido) {
        update.nombre_y_apellido = nombre_y_apellido
    }
    if (dni) {
        update.dni = dni
    }
    if (email) {
        update.email = email
    }
    if (rol) {
        update.rol = rol
    }
    if (fecha_nacimiento) {
        update.fecha_nacimiento = fecha_nacimiento
    }
    if (telefonos) {
        update.telefonos = telefonos
    }
    if (direccion) {
        update.direccion = direccion
    }

    if (update.nombre_y_apellido || update.dni || update.email || update.rol || update.fecha_nacimiento || update.telefonos || update.direccion) {
        try {
            const personita = await personaModelo.findByIdAndUpdate(id, update, {
                new: true
            })
            return res.json({
                mensaje: "Persona actualizada",
                personita
            })


        } catch (error) {
            res.json({
                mensaje: "Error al actualizar la persona"
            })
        }
    }
}

const deletePersonas = async (req, res) => {
    const {
        id
    } = req.params
    try {
        await personaModelo.findByIdAndDelete(id, {
            new: true
        })
        res.json({
            mensaje: "Se elimino la persona"
        })
    } catch (error) {
        res.json({
            mensaje: "Error al eliminar"

        })
    }
}

const getPersona = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const persona1 = await personaModelo.findOne({
            _id: id
        })
        res.json(persona1)
    } catch (error) {
        res.json({
            mensaje: "Error al encontrar a la persona"
        })

    }
}

module.exports = {
    getPersonas,
    postPersonas,
    putPersonas,
    deletePersonas,
    getPersona
}
