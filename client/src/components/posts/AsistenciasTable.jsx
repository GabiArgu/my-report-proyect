import React from 'react'

const AsistenciasTable = () => {
  return (
    <>
    <h2>Asistencias</h2>
           <div className="table-responsive">
             <table className="table table-striped table-sm">
               <thead>
                 <tr>
                   <th scope="col">Nombre del Alumno 👨‍🎓👩‍🎓</th>
                   <th scope="col">Materia 📚</th>
                   <th scope="col">Fecha 📆</th>
                   <th scope="col">Asistio? 🖐</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   
                   <td>Gomez Katherina</td>
                   <td>Programacion</td>
                   <td>10/09/22</td>
                   <td>No</td>
                 </tr>
                 <tr>
                   
                   <td>Insaurralde Ivana</td>
                   <td>Programacion</td>
                   <td>10/09/22</td>
                   <td>Si</td>
                 </tr>
                 <tr>
                 
                   <td>Duarte Ramos Belen</td>
                   <td>Programacion</td>
                   <td>10/09/22</td>
                   <td>No</td>
                 </tr>
              
                 
               </tbody>
             </table>
           </div></>
  )
}

export default AsistenciasTable