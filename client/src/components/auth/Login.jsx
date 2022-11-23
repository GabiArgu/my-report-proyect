import "../../styles/index.css";
import { FaReply, FaPlay } from "react-icons/fa";
import { Formik,Form,Field,ErrorMessage } from "formik";
import {useState} from "react"
import { loginusuario } from '../../redux/actions/auth'
import { useHistory } from 'react-router-dom';


function Login() {
  const [formEnviado, setFormEnviado] = useState(false)
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(valores) => {
        let errores = {};
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
        //Validacion password
        if (!valores.password) {
          errores.password = "Ingrese su contraseña";
        } else if (
          !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password)
        ) {
          errores.password =
            "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.NO puede tener otros símbolos.";
        }
        return errores;
      }}
      onSubmit={async(valores,{resetForm})=>{
        await loginusuario(valores)
        console.log(valores)
        resetForm()
        setFormEnviado(true)
        setTimeout(() => {
          setFormEnviado(false)
        }, 3000);
        history.push('/homeAlumnos');
    
        
      }}
    >
      {/* RenderedProp renderizamos el formulario pero dentro de una funcion donde podremos nyectar valores formik*/}
      {({
        errors,
      }) => (
        <div className="fondoLogin vh-100 d-flex justify-content-center align-items-center">
          <div className="login col-md-4 p-5 shadow-sm rounded-3">
            <h2 className="text-center mb-4 ">Iniciar Sesion</h2>

            <Form >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electronico
                </label>
                <Field
                  type="text"
                  className="form-control "
                  id="input"
                  aria-describedby="emailHelp"
                  name="email"
                  placeholder="name@example.com"
                 
                />
                <br />
                <ErrorMessage name="email" component={()=>(<div className="alert alert-danger" role="alert">{errors.email}</div>)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <Field
                  type="password"
                  className="form-control  "
                  id="input2"
                  name="password"
                  placeholder="*******"
                  autoComplete="on"
               
                />
                <br />
                  <ErrorMessage name="email" component={()=>(<div className="alert alert-danger" role="alert">{errors.password}</div>)}/>
              </div>
              <p className="small">
                <a className="olvidaste" href="forget-password.html">
                  Olvidaste tu contraseña?
                </a>
              </p>
              <div className="d-grid">
                <button className="ingresar" type="submit">
                  <FaPlay />
                </button>
              </div>
              <br />
              {formEnviado && <div className="alert alert-success" role="alert">Formulario enviado con exito 😊</div>}
            </Form>
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
      )}
    </Formik>
  );
}

export default Login;
