import React from 'react'

const NavbarAdmin = (props) => {
    const { funcionCambiarVista } = props
  return (
    <>
    <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block sidebar collapse"
         
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                <BsFillCalendarWeekFill/>
                  <button className="btn" onClick={() => funcionCambiarVista('Asistencias')}>
                  
                    Asistencias
                  </button>
                </li>
                <li className="nav-item">
                <BsFillChatRightTextFill/>
                  <button className="btn" onClick={() => funcionCambiarVista('Avisos')}>
                  
                    Avisos
                  </button>
                </li>
               
                <li className="nav-item">
                <BsFillPeopleFill/>
                  <button className="btn" onClick={() => funcionCambiarVista('Alumnos')}>
                  
                    Alumnos
                  </button>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span id="span">Mis Materias</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    link="/materias"
                    className="feather feather-plus-circle align-text-bottom"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </a>
              </h6>
              <ul className="nav flex-column mb-2 align-self-lg-start">
              <li className="nav-item">
              <BsBookHalf/>
                  <button className="btn">
                 
                    Matematica
                  </button>
                </li>
                <li className="nav-item">
                <BsBookHalf/>
                  <button className="btn">
                
                    Programacion
                  </button>
                </li>
                <li className="nav-item">
                <BsBookHalf/>
                  <button className="btn">
                  
                    Ingenieria
                  </button>
                </li>

              </ul>
            </div>
      </nav>
    </>

  )
}

export default NavbarAdmin