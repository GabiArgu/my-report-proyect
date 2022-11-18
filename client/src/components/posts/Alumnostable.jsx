import React from 'react'

const Alumnostable = () => {
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
                  <tr>
                    <td>Arguello Gabriel</td>
                    <td>Gaby10@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Jessica Arguello</td>
                    <td>jess30@gmail.com</td>
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

export default Alumnostable