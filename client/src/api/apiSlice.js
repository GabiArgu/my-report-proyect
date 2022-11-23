import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    //Lugar donde realizo mis funciones de peticiones http POST PUT DELETE

    //Colocamos un nombre para agrupar datos que vienen desde servidor
    reducerPath:"api",

    //A que url estamos haciendo la peticion
    baseQuery:fetchBaseQuery({
        //Backend
        baseUrl:'http://localhost:3000',
}),
    //Funcion que retorna peticiones http POST PUT DELETE
    //El parametro builder sirve para diferenciar peticiones cuales son las que traen datos=GET  y cuales la que 
    //mutan datos = POST PUT DELETE
    endpoints:(builder)=>({
        getPersonas: builder.query({
            query:()=>'/api/personas',
          
        })

    })
})
            //Hook para poder solicitar datos
export const {useGetPersonasQuery} = apiSlice