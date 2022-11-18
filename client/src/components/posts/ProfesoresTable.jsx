import React from 'react'

const ProfesoresTable = () => {
  return (
    <>
    <h2>Profesones</h2>
           <div className="table-responsive">
             <table className="table table-striped table-sm">
               <thead>
                 <tr>

                   <th scope="col">Nombre y Apellido 📑</th>
                   <th scope="col">Correo Electronico 📩</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Alejandro Sanabria</td>
                   <td>alesan@gmail.com</td>
                 </tr>
                 <tr>
                   <td>Silvia Hoferek</td>
                   <td>silvia30@gmail.com</td>
                 </tr>
                 <tr>
                   <td>Dario Benitez</td>
                   <td>dary40@gmail.com</td>
                 </tr>
               </tbody>
             </table>
           </div></>
  )
}

export default ProfesoresTable