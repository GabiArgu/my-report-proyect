import { useState } from "react";
import mr from "../assets/videoreports2gif.gif";
import Navbar from "./layout/Navbar";
import Alumnostable from "./posts/Alumnostable";
import AsistenciaTable from "./posts/AsistenciasTable";
import Avisos from "./posts/Avisos";
import ProfesoresTable from "./posts/ProfesoresTable";

function Home() {
  const [vista, setVista] = useState("Inicio");

  /*
  Inicio
  Alumnos
  Asistencias
  Avisos
  Materias Profesores
  */

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar funcionCambiarVista={setVista} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <canvas
              className="canvas my-4 w-100 chartjs-render-monitor"
              id="myChart"
              width="671"
              height="283"
            ></canvas>

            {vista === "Inicio" ? (
               <div className="row featurette align-content-center text-center">
               <div className="col-md-7 order-md-2 align-self-lg-center">
                 <h2 className="featurette-heading fw-normal lh-1">
                   Bienvenido/a!{" "}
                   <span className="span">
                     {" "}
                     a <i>My Reports</i>{" "}
                   </span>
                 </h2>
                 <p className="lead">
                   Puedes comenzar a navegar por las diversas funcionalidades  cuanto gustes
                 </p>
               </div>
               <div className="col-md-5 order-md-1">
                 <img
                   className="imagenlogo"
                   src={mr}
                   height="350px"
                   alt="gif de algo"
                 />
               </div>
             </div>
           
            ) : vista === "Alumnos" ? (
              <Alumnostable />
            ) : vista === "Profesores" ? (
              <ProfesoresTable />
            ) : vista === "Avisos" ? (
              <Avisos />
            ) : vista === "Asistencias" ? (
              <AsistenciaTable />
            ) : (
              <h3>Seleccione una vista...</h3>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
