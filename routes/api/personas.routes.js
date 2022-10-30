const express = require('express')
const router = express.Router()
const {
    getPersonas,
    postPersonas,
    putPersonas,
    deletePersonas,
    getPersona
} = require('../../controllers/Personas.controller')
const validarCampos = require('../../helpers/validarCampos')

router.get('/', getPersonas)
router.post('/', validarCampos, postPersonas)
router.put('/:id', validarCampos, putPersonas)
router.delete('/:id', deletePersonas)
router.get('/:id', getPersona)


module.exports = router;