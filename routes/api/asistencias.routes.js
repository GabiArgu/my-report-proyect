const express = require('express')
const router = express.Router()
const {
    getAsistencias,
    postAsistencias,
    putAsistencias,
    deleteAsistencias
} = require('../../controllers/Asistencias.controller')
const validarCampos = require('../../helpers/validarCampos')


router.get('/', getAsistencias)
router.post('/', validarCampos, postAsistencias)
router.put('/:id', validarCampos, putAsistencias)
router.delete('/:id', deleteAsistencias)



module.exports = router;