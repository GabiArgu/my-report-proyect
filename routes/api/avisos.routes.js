const express = require('express')
const router = express.Router()
const {
    getAvisos,
    postAviso,
    putAviso,
    deleteAviso,
    getAviso
} = require('../../controllers/Avisos.controller')
const validarCampos = require('../../helpers/validarCampos')

router.get('/', getAvisos)
router.post('/', validarCampos, postAviso)
router.put('/:id', validarCampos, putAviso)
router.delete('/:id', deleteAviso)
router.get('/:id', getAviso)


module.exports = router;