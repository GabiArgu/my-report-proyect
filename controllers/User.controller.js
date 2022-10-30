const usersModelo = require('../models/User')
const bcrypt = require('bcryptjs')
const JWT = require('../helpers/generarJwt')

const login = async (req, res) => {
   const {
      email,
      contrasenia
   } = req.body
   console.log(email, contrasenia)
   try {
      const usuario = await usersModelo.findOne({
         email
      })
      if (!usuario) {
         return res.json({
            mensaje: 'El usuario no existe  :C'
         })
      }
      if (!usuario.estado) {
         return res.json({
            mensaje: 'El usuario no esta activo'
         })

      }
      const validarContrasenia = bcrypt.compare(contrasenia, usuario.contrasenia)
      if (!validarContrasenia) {
         return res.json({
            mensaje: 'Contraseña incorrecta >:/'

         })
      }
      //Generar el token
      const token = await JWT({
         uid: usuario.id
      })
      return res.json({
         mensaje: 'Inicio de sesion exitoso :D',
         token
      })
   } catch (err) {
      return res.json({
         mensaje: 'Error no se pudo iniciar sesion',
         err
      })
   }
}
//Aqui importamos el modelo

//Ruta get para todos los usuarios
const getUsers = async (req, res) => {
   //Creamos una funcion asincrona la cual va a esperar a que la bd nos traiga todos los tados del modelo
   const datos = await usersModelo.find({})
   //Aqui retornamos un mensaje en formato json el cual nos traera todos los datos encoontrados
   return res.json({
      mensaje: "usuarios enontrados",
      encontrados: datos
   })
}

//Ruta post para usuarios
const postUsers = async (req, res) => {

   const {
      nombreUsuario,
      email,
      rol,
      contrasenia
   } = req.body

   const newcontrasenia = bcrypt.hashSync(contrasenia, 10)

   const newUsuario = new usersModelo({
      nombreUsuario,
      email,
      rol,
      contrasenia: newcontrasenia
   })

   const VerificaEmail = await usersModelo.findOne({
      email: email
   })
   if (VerificaEmail) {
      return res.json({
         message: "Ese correo ya lo uso otro usuario :/"
      })
   }
   const VerificaUser = await usersModelo.findOne({
      nombreUsuario: nombreUsuario
   })
   if (VerificaUser) {
      return res.json({
         message: "el nombre de usuario ya existe :/",


      })
   }

   try {
      const user = await newUsuario.save()

      return res.status(201).json({
         message: "Usuario guardado correctamente :D",
         user

      })

   } catch (error) {
      return res.status(401).json({
         message: "El usuario no se ha podido crear :C",
         error: error
      })
   }

}

//Ruta put para usuario
const putUsers = async (req, res) => {
   //Tomamos el id del usuario a actualizar
   const {
      id
   } = req.params
   //Tomamos los datos del cuerpodel modelo
   const {
      nombreUsuario,
      email,
      rol,
      contrasenia
   } = req.body
   //Constante update donde se guardas los datos actulizados
   const update = {}

   //Si existe este campo lo actualizaremos 
   if (nombreUsuario) {
      update.nombreUsuario = nombreUsuario
   }
   if (email) {
      update.email = email
   }
   if (rol) {
      update.rol = rol
   }
   if (contrasenia) {
      update.contrasenia = contrasenia
   }
   //Si se cambiaron algunos de estos datos usaremos el metodo para realizar el put
   if (update.nombreUsuario || update.email || update.rol || update.contrasenia) {
      try {
         const usuario = await usersModelo.findByIdAndUpdate(id, update, {
            new: true
         })
         return res.json({
            mensaje: "Usuario actualizado",
            usuario
         })

         //En caso de error arroja un json con el mensaje 
      } catch (error) {
         res.json({
            mensaje: "Error al actualizar usuario"
         })
      }
   }

}
//Ruta delete para eliminar usuario
const deleteUsers = async (req, res) => {
   //Tomamos el id del usuario que queremos eliminar
   const {
      id
   } = req.params
   try {
      //ELiminamos el usuario con dicho id
      await usersModelo.findByIdAndDelete(id, {
         new: true
      })
      //REspondemos con un mensaje json
      res.json({
         mensaje: "Se elimino el usuario"
      })
   }
   //En caso de error nos tira el mensaje de error
   catch (error) {
      res.json({
         mensaje: "Error al eliminar"

      })
   }
}

//Ruta para traer 1 usuario
const getUser = async (req, res) => {
   //Tomamos el id del usuario que queremos traer y lo asignamos a una constante
   const {
      id
   } = req.params

   try {
      //Traemos el usuario el cual tenga dicho id que trajimos antes
      const usuario1 = await usersModelo.findOne({
         _id: id
      })
      //Respondemos con un mensaje json que nos muestra el usuario
      res.json(usuario1)
   } catch (error) {
      //En caso de error nos manda este mensaje en formato json
      res.json({
         mensaje: "Error al encontrar el usuario"
      })

   }

}

//Exportamos los controladores
module.exports = {
   getUsers,
   postUsers,
   putUsers,
   deleteUsers,
   getUser,
   login
}
