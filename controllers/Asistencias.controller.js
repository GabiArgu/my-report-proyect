const asistenciaModelo = require('../models/Asistencias')

const getAsistencias = async (req, res) => {
    const datos = await asistenciaModelo.find({})
    return res.json({
        mensaje: "Asistencias Encontradas",
        encontrados: datos
    })

}
const postAsistencias = async (req, res) => {
    const {
        nombre_alumno,
        materia,
        fecha,
        asistio
    } = req.body

    const newAsistencia = new asistenciaModelo({
        nombre_alumno,
        materia,
        fecha,
        asistio
    })
    const asistencia = await newAsistencia.save()
    return res.json({
        mensaje: "Asistencia guardada",
        encontrados: asistencia
    })


}

const putAsistencias = async (req, res) => {
    const {
        id
    } = req.params
    const {
        nombre_alumno,
        materia,
        fecha,
        asistio
    } = req.body
    const update = {}


    if (nombre_alumno) {
        update.nombre_alumno = nombre_alumno
    }
    if (materia) {
        update.materia = materia
    }
    if (fecha) {
        update.fecha = fecha
    }
    if (asistio) {
        update.asistio = asistio
    }
    if (update.nombre_alumno || update.materia || update.fecha || update.asistio) {
        try {
            const asistencia = await asistenciaModelo.findByIdAndUpdate(id, update, {
                new: true
            })
            return res.json({
                mensaje: "Asistencia Actualizada",
                asistencia
            })


        } catch (error) {
            res.json({
                mensaje: "Error al actualizar asistencia"
            })
        }
    }
}
const deleteAsistencias = async (req, res) => {
    const {
        id
    } = req.params
    try {
        await asistenciaModelo.findByIdAndDelete(id, {
            new: true
        })
        res.json({
            mensaje: "Se elimino la asistencia"
        })
    } catch (error) {
        res.json({
            mensaje: "Error al eliminar"

        })
    }
}

module.exports = {
    getAsistencias,
    postAsistencias,
    putAsistencias,
    deleteAsistencias
}