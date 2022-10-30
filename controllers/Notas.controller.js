const notasModelo = require('../models/Notas')

const getNotas = async (req, res) => {
    const datos = await notasModelo.find({})
    return res.json({
        mensaje: "Notas Encontradas",
        encontrados: datos
    })

}
const postNotas = async (req, res) => {
    const {
        nombre_alumno,
        carrera,
        grado,
        materia,
        tipo_examen,
        nota
    } = req.body

    const newNotas = new notasModelo({
        nombre_alumno,
        carrera,
        grado,
        materia,
        tipo_examen,
        nota
    })
    const newNota = await newNotas.save()
    return res.json({
        mensaje: "Nota guardada",
        encontrados: newNota
    })


}

const putNotas = async (req, res) => {
    const {
        id
    } = req.params
    const {
        nombre_alumno,
        carrera,
        grado,
        materia,
        tipo_examen,
        nota
    } = req.body
    const update = {}
    console.log(id)
    console.log(typeof id)

    if (nombre_alumno) {
        update.nombre_alumno = nombre_alumno
    }
    if (carrera) {
        update.carrera = carrera
    }
    if (grado) {
        update.grado = grado
    }
    if (materia) {
        update.materia = materia
    }
    if (tipo_examen) {
        update.tipo_examen = tipo_examen
    }
    if (nota) {
        update.nota = nota
    }

    if (update.nombre_alumno || update.carrera || update.grado || update.materia || update.tipo_examen || update.nota) {

        try {
            const nota = await notasModelo.findByIdAndUpdate(id, update, {
                new: true
            })
            return res.json({
                mensaje: "Nota actualizada",
                nota
            })


        } catch (error) {
            res.json({
                mensaje: "Error al actualizar la nota"
            })
        }

    }

}
const deleteNotas = async (req, res) => {
    const {
        id
    } = req.params
    try {
        await notasModelo.findByIdAndDelete(id, {
            new: true
        })
        res.json({
            mensaje: "Se elimino la nota"
        })
    } catch (error) {
        res.json({
            mensaje: "Error al eliminar"

        })
    }
}
const getNota = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const nota1 = await notasModelo.findOne({
            _id: id
        })
        res.json(nota1)
    } catch (error) {
        res.json({
            mensaje: "Error al encontrar la nota"
        })

    }

}


module.exports = {
    getNotas,
    postNotas,
    putNotas,
    deleteNotas,
    getNota
}