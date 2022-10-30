import "../../styles/index.css";
import { FaReply, FaPlay } from "react-icons/fa";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { Session } from "../../contexts/Session";
const initialForm = {
  email: "",
  password: "",
};
function Login() {
  //Método para la redirección
  const history = useHistory();

  const InicioSesionExitosa = (token) => {
    swal({
      title: "Inicio de Sesión Exitosa",
      text: "Bienvenido",
      icon: "success",
      timer: "1000",
      showCancelButton: false,
      showConfirmButton: false,
    }).then(() => {
      //Almacenamiento del token y redirección después de 3 segundos
      setSession({ token });
      history.push("/home");
    });
  };
  const InicioSesionError = () => {
    swal({
      title: "Inicio de Sesión Fallida",
      text: "Intente Nuevamente",
      icon: "error",
      timer: "2000",
    });
  };

  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    });
    const response = await res.json();

    //Si la consulta es devuelve el token lo guardamos en el contexto de la sesión
    if (response.token) {
      localStorage.setItem("rstoken", response.token);
      console.log(response.token);

      //Agregar un mensaje para avisarle al usuario que ya inició sesión

      InicioSesionExitosa(response.token);
    } else {
      InicioSesionError();
    }
    //Agregar en un else algún mensaje para avisarle al usuario que la cuenta no existe.
  };

  //Getter y Setter de la sesión
 
  return (
    <div className="fondoLogin vh-100 d-flex justify-content-center align-items-center">
      <div className="login col-md-4 p-5 shadow-sm rounded-3">
        <h2 className="text-center mb-4 ">Iniciar Sesion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Correo Electronico
            </label>
            <input
              type="text"
              className="form-control "
              id="input"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Ingrese aqui su correo por favor"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control  "
              id="input"
              name="password"
              placeholder="Ingrese aqui su contraseña por favor"
              onChange={handleChange}
            />
          </div>
          <p className="small">
            <a className="olvidaste" href="forget-password.html">
              Olvidaste tu contraseña?
            </a>
          </p>
          <div className="d-grid">
            <button className="ingresar" type="submit" onClick={handleSubmit}>
              <FaPlay />
            </button>
          </div>
        </form>
        <div className="mt-3">
          <p className="mb-0  text-center">
            No tienes cuenta 📝?{" "}
            <a href="/register" className="olvidaste ">
              Registrarse
            </a>
          </p>
        </div>
        <div className="mt-3">
          <p className="mb-0  text-center">
            <a href="/" className="volver">
              <FaReply />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
