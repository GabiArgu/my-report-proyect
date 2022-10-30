const express = require('express')
//REquerimos libreri express
const router = express.Router()
//USamos el metodo para crear las rutas ROuter()
const validarCampos = require('../../helpers/validarCampos')



const {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    getUser,
    login
} = require('../../controllers/User.controller')
//AQui importamos los controladores get post put delete y el get que nos traera por id


//Creacion de rutas
router.post('/login', validarCampos, login)
router.get('/', getUsers)
router.post('/', validarCampos, postUsers)
router.put('/:id', validarCampos, putUsers)
router.delete('/:id', deleteUsers)
router.get('/:id', getUser)

//Exportamos el modulo 
module.exports = router;