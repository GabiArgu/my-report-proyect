import { useState } from "react";
import mr from "../assets/videoreports2gif.gif";
import NavbarAlumnos from "./layout/NavbarAlumnos";
import Alumnostable from "./posts/Alumnostable";
import AsistenciaTable from "./posts/AsistenciasTable";
import Avisos from "./posts/Avisos";
import ProfesoresTable from "./posts/ProfesoresTable";
import logo from "../assets/logomyreports444.gif"

function HomeAlumnos() {
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
          <NavbarAlumnos funcionCambiarVista={setVista} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
            <br />
            <br />
          <div className="dropdown text-center">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#"><font  className="font3"><font className="font1">Nuevo proyecto...</font></font></a></li>
            <li><a className="dropdown-item" href="#"><font  className="font3"><font  className="font2" >Configuraciones</font></font></a></li>
            <li><a className="dropdown-item" href="#"><font  className="font3"><font   className="font3">Perfil</font></font></a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#"><font className="font3"><font  className="font3">Cerrar sesión</font></font></a></li>
          </ul>
        </div>


        <br />
      <br />
      <br />

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

export default HomeAlumnos;
