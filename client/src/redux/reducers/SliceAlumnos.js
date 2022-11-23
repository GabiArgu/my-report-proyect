import { createSlice } from "@reduxjs/toolkit";
// Aqui podremos definir las funciones que van a cambiar mi estado
const initialState = [{
    id:"1",
    nombre:"Gaby",
    email:"gaby@gmail.com"
}]

export const SliceAlumnos = createSlice({
    name:"CrudAlumnos",
    initialState,
    reducers:{
        addDatos :(state,action)=>{
            state.push(action.payload)

        },
        deleteDatos :(state,action)=>{
           const alumnosEncontrados= state.find(alumno=> alumno.id===action.payload)
            if(alumnosEncontrados){
                state.splice(state.indexOf(alumnosEncontrados),1)
            }
        },
        editDatos:(state,action)=>{
            const {id,nombre,email}=action.payload
             const alumnoEncontrado = state.find((alumno)=> alumno.id===id)
             if(alumnoEncontrado){
                alumnoEncontrado.nombre=nombre,
                alumnoEncontrado.email=email
             }
        }
    }
})

export const {addDatos,deleteDatos,editDatos}= SliceAlumnos.actions
export default SliceAlumnos.reducer