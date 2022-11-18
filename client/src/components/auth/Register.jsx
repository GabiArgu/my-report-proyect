import "../../styles/index.css";
import { FaReply, FaRegEdit } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { registrarnuevoUsuario } from '../../utils/fetch.apis'
import { useHistory } from 'react-router-dom';

function Register() {
  const [formEnviado, setFormEnviado] = useState(false);

  const history = useHistory();

  return (
    <Formik
      initialValues={{
      nombreUsuario:"",
      email:"",
      rol:"",
      contrasenia:""
      }}
      validate={async (valores,) => {
        let errores = {};


        //Validacion usuario
        if (!valores.nombreUsuario) {
          errores.nombreUsuario = "Ingrese su usuario";
        } 
        //Validacion email
        if (!valores.email) {
          errores.email = "Ingrese su correo";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email = "El correo debe contener formato de correo";
        }
        //Validacion rol
        if (!valores.rol) {
          errores.rol = "Debes elegir un rol";
        } 

        //Validacion password
        if (!valores.contrasenia) {
          errores.contrasenia = "Ingrese su contraseña";
        } else if (
          !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.contrasenia)
        ) {
          errores.contrasenia =
            "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.NO puede tener otros símbolos.";
        }


        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        
        await registrarnuevoUsuario(valores)
       
        console.log(valores);
        resetForm();
        setFormEnviado(true);
        setTimeout(() => {
          setFormEnviado(false);
        }, 5000);
        history.push('/login');
      }}
    >
      {/* RenderedProp renderizamos el formulario pero dentro de una funcion donde podremos nyectar valores formik*/}
      {({ errors }) => (
        <div className="fondoLogin vh-100 d-flex justify-content-center align-items-center">
          <div className="login col-md-4 p-5 shadow-sm rounded-3">
            <h2 className="text-center mb-4 ">Bienvenido</h2>

            <Form>
              <div className="mb-3">
                <label htmlFor="nombreUsuario" className="form-label">
                  Nombre de Usuario
                </label>
                <Field
                  type="text"
                  id="input"
                  className="form-control "
                  aria-describedby="emailHelp"
                  placeholder="Nombre de Usuario"
                  name="nombreUsuario"
                />
                <br />
                <ErrorMessage
                  name="nombreUsuario"
                  component={() => (
                      <div className="alert alert-danger" role="alert">
                      {errors.nombreUsuario}
                    </div>
                  )}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electronico
                </label>
                <Field
                className="form-control "
                  type="email"
                  name="email"
                  id="input2"
                  placeholder="name@example.com"
                />
                <br />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.email}
                    </div>
                  )}
                />
              </div>
              <div className="mb-3">
                <Field 
                  name="rol"
                  as="select"
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                
                >
                  <option defaultValue={'DEFAULT'} disabled>Elegir un Rol</option>
                  <option value="alumno">Alumno 👨‍🎓👩‍🎓 </option>
                  <option value="profesor">Profesor 👩‍🏫👨‍🏫</option>
                  <option value="admin">Administrativo 👩‍💼👨‍💼</option>
                </Field>
                 <ErrorMessage
                  name="rol"
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.rol}
                    </div>
                  )}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contrasenia" className="form-label">
                  Contraseña
                </label>
                <Field
                className="form-control "
                  type="password"
                  name="contrasenia"
                  id="input3"
                  placeholder="*******"
                  autoComplete="on"
                />
                <br />
                <ErrorMessage
                  name="contrasenia"
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.contrasenia}
                    </div>
                  )}
                />
              </div>
              <div className="d-grid">
                <button className="ingresar" type="submit">
                  <FaRegEdit />
                </button>
              </div>
            </Form>
            <br />
            {formEnviado && <div className="alert alert-success" role="alert">Formulario enviado con exito 😊</div>}
            <div className="mt-3">
              <p className="mb-0  text-center">
                Ya creaste una cuenta 🔐?{" "}
                <a href="/login" className="olvidaste ">
                  Inicar Sesion
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
      )}
    </Formik>
  );
}

export default Register;
