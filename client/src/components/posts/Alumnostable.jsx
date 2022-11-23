import React from 'react'
import { useSelector } from 'react-redux'

const Alumnostable = () => {
  const estadoAlumnos=useSelector((state)=>state.Alumnos)
  return (
    <>
     <h2>Alumnos</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>

                    <th scope="col">Nombre y Apellido 📑</th>
                    <th scope="col">Correo Electronico 📩</th>
                  </tr>
                </thead>
                <tbody>
                  {estadoAlumnos.map(alumno=>
                    (<tr  key={alumno.id}>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.email}</td>
                    <button></button>
                  </tr>))}
                </tbody>
              </table>
            </div></>
  )
}

export default Alumnostable