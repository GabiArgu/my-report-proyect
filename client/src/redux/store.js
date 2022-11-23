import { configureStore } from '@reduxjs/toolkit'
import SliceAlumnos from './reducers/SliceAlumnos'

//STORE contiene todo el árbol de estado de tu aplicación. 
//La única forma de cambiar el estado que contiene es despachando una acción
 export const store = configureStore({
  reducer:{
    Alumnos: SliceAlumnos
  }
})

