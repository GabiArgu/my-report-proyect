const express = require('express')
const router = express.Router()
const {
    getNotas,
    postNotas,
    putNotas,
    deleteNotas,
    getNota
} = require('../../controllers/Notas.controller')
const validarCampos = require('../../helpers/validarCampos')

router.get('/', getNotas)
router.post('/', validarCampos, postNotas)
router.put('/:id', validarCampos, putNotas)
router.delete('/:id', deleteNotas)
router.get('/:id', getNota)


module.exports = router;