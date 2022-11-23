import Navbar from "./layout/Navbar";
import mesa from "../assets/mesa.jpg";
import mr from "../assets/videoreports2gif.gif";
import vista1 from "../assets/vista2.png";
import vista2 from "../assets/vista1.0.png";
import vista3 from "../assets/vista3.0.png"

function LandingPages() {
  return (
    <>
      <Navbar />
      <div className="container justify-content-center align-content-center">
        <br />

        {/* titulo */}
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
              Puedes registrarte o iniciar sesion si deseas, para poder empezar
              a navegar por las distintas funcionalidades
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
        <br />

        {/* albun */}
        <div className="album py-5">
          <div className="divalbun container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col" id="vista1" >
                <div className="card shadow-sm" >
                  <img src={vista1} height="250px" width="370px"  id="imagenvista1"/>
                </div>
              </div>
              <div className="col" id="vista2">
                <div className="card shadow-sm">
                <img src={vista2} height="250px" width="370px"  id="imagenvista2"/>
                </div>
              </div>
              <div className="col" id="vista3">
                <div className="card shadow-sm">
                <img src={vista3} height="250px" width="370px" id="imagenvista3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* heroes */}
        <div className="rowi px-4 pt-5 my-5 text-center border-bottom">
          <h3 className="display-4 fw-bold">
            <i>Que ofrecemos?</i>
          </h3>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Bienvenido/a a la plataforma <i>My reports</i> , una herramienta
              de gestion de archivos para el instituto Heroku
              en la cual podras consultar toda aquella informacion que requieras
              como alumno de esta institucion .Tambien puedes anotarte en las materias
              que necesites para no perderte ninguna notificacion de tus
              profesores. En el caso de ser un profesor o administrativo de esta institucion tambien te presentaremos diversas
              funcionalidades unicas que puedes realizar . Muchos exitos! 💌.
            </p>
          </div>
          <div className="over overflow-hidden">
            <div className="container px-5">
              <img
                src={mesa}
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPages;
