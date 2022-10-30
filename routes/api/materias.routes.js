const express = require('express')
const router = express.Router()
const {
    getMaterias,
    postMaterias,
    putMaterias,
    deleteMaterias,
    getMateria
} = require('../../controllers/Materias.controller')
const validarCampos = require('../../helpers/validarCampos')

router.get('/', getMaterias)
router.post('/', validarCampos, postMaterias)
router.put('/:id', validarCampos, putMaterias)
router.delete('/:id', deleteMaterias)
router.get('/:id', getMateria)


module.exports = router;
