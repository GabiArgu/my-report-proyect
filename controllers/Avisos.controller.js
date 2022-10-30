const avisoModelo = require('../models/Avisos')

const getAvisos = async (req, res) => {
    const datos = await avisoModelo.find({})
    return res.json({
        mensaje: "Avisos Encontrados",
        encontrados: datos
    })

}

const postAviso = async (req, res) => {
    const {
        remitente,
        materia,
        tipo_aviso,
        mensaje
    } = req.body

    const newAviso = new avisoModelo({
        remitente,
        materia,
        tipo_aviso,
        mensaje
    })

    const aviso = await newAviso.save()

    return res.json({
        mensaje: "Avisos guardados",
        encontrados: aviso
    })


}

const putAviso = async (req, res) => {
    const {
        id
    } = req.params
    const {
        remitente,
        materia,
        tipo_aviso,
        mensaje
    } = req.body
    const update = {}


    if (remitente) {
        update.remitente = remitente
    }
    if (materia) {
        update.materia = materia
    }
    if (tipo_aviso) {
        update.tipo_aviso = tipo_aviso
    }
    if (mensaje) {
        update.mensaje = mensaje
    }
    if (update.remitente ||  update.materia || update.tipo_aviso || update.mensaje) {
        try {
            const aviso = await avisoModelo.findByIdAndUpdate(id, update, {
                new: true
            })
            return res.json({
                mensaje: "Mensaje actualizado",
                aviso
            })


        } catch (error) {
            res.json({
                mensaje: "Error al actualizar mensaje"
            })
        }
    }


}

const deleteAviso = async (req, res) => {
    const {
        id
    } = req.params
    try {
        await avisoModelo.findByIdAndDelete(id, {
            new: true
        })
        res.json({
            mensaje: "Se elimino el aviso"
        })
    } catch (error) {
        res.json({
            mensaje: "Error al eliminar"

        })
    }
}

const getAviso = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const aviso1 = await avisoModelo.findOne({
            _id: id
        })
        res.json(aviso1)
    } catch (error) {
        res.json({
            mensaje: "Error al encontrar el aviso"
        })

    }
}

module.exports = {
    getAvisos,
    postAviso,
    putAviso,
    deleteAviso,
    getAviso
}