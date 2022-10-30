import { FaIdCard ,FaIdCardAlt} from "react-icons/fa";
function Navbar2() {
  return (
    <>
      <header className="navbar2">
        <div className="">
          <div className="">
            <div className="">

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="/register" className="nav-link text-secondary">
                    <FaIdCardAlt/>
                   <i>Registrarme</i>
                  </a>
                </li>
                <li>
                  <a href="/login" className="nav-link text-secondary">
                    <FaIdCard/>
                    <i>Iniciar Sesion</i>
                  </a>
                </li>
        
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar2;
