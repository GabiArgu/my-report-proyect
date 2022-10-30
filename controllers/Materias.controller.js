const materiaModelo = require('../models/Materias')

const getMaterias = async (req, res) => {
    const datos = await materiaModelo.find({})
    return res.json({
        mensaje: "Materias Encontradas",
        encontrados: datos
    })

}
const postMaterias = async (req, res) => {
    const {
        profeTitular,
        nombreMateria,
        horarioDesde,
        horarioHasta
    } = req.body

    const newMateria = new materiaModelo({
        profeTitular,
        nombreMateria,
        horarioDesde,
        horarioHasta,
    })
    const materia = await newMateria.save()
    return res.json({
        mensaje: "Materia guardada",
        encontrados: materia
    })


}

const putMaterias = async (req, res) => {
    const {
        id
    } = req.params
    const {
        profeTitular,
        nombreMateria,
        horarioDesde,
        horarioHasta
    } = req.body
    const update = {}
    console.log(id)
    console.log(typeof id)

    if (profeTitular) {
        update.profeTitular = profeTitular
    }
    if (nombreMateria) {
        update.nombreMateria = nombreMateria
    }
    if (horarioDesde) {
        update.horarioDesde = horarioDesde
    }
    if (horarioHasta) {
        update.horarioHasta = horarioHasta
    }

    if (update.profeTitular || update.nombreMateria || update.horarioDesde || update.horarioHasta) {
        try {
            const materia = await materiaModelo.findByIdAndUpdate(id, update, {
                new: true
            })
            return res.json({
                mensaje: "Materia actualizada",
                materia
            })


        } catch (error) {
            res.json({
                mensaje: "Error al actualizar la materia"
            })
        }



    }

}
const deleteMaterias = async (req, res) => {
    const {
        id
    } = req.params
    try {
        await materiaModelo.findByIdAndDelete(id, {
            new: true
        })
        res.json({
            mensaje: "Se elimino la materia"
        })
    } catch (error) {
        res.json({
            mensaje: "Error al eliminar"

        })
    }
}
const getMateria = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const materia1 = await materiaModelo.findOne({
            _id: id
        })
        res.json(materia1)
    } catch (error) {
        res.json({
            mensaje: "Error al encontrar la materia"
        })

    }

}


module.exports = {
    getMaterias,
    postMaterias,
    putMaterias,
    deleteMaterias,
    getMateria
}