//// "NOSEPORQUENOANDA "¯\_(ツ)_/¯" LOL   
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const {
   PORT
} = require('./config/variables');

//Inicializacion del servidor
const app = express()
//requerimos libreria para poder leer el archivo.env


//accedemos al puerto 3000 asignado en el archivo .env
const port = PORT || 5000


// Middlewares que nos ayudan a configurar el servidor
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
   extended: false
}));


//Requerimos el archivo de conexion a la base de datos
const connectDB = require('./config/db')

//iniciamos el mware
app.use(express.json({
   extended: false
}))

//conectamos a db
connectDB()
//test
// app.get('/test', (req, res) => res.send('BEnd api rest activo') )

//routas
app.use('/api/users', require('./routes/api/users.routes'))
app.use('/api/asistencias', require('./routes/api/asistencias.routes'))
app.use('/api/avisos', require('./routes/api/avisos.routes'))
app.use('/api/personas', require('./routes/api/personas.routes'))
app.use('/api/materias', require('./routes/api/materias.routes'))
app.use('/api/notas', require('./routes/api/notas.routes'))


//asignamos el puerto en donde se iniciara el servidor
app.listen(port, () => {
   console.log(`servidor iniciado en el puerto: ${port}`)
})