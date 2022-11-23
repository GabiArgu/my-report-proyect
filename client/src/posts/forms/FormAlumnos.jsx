import "../../styles/index.css";
import {  FaFolderPlus } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDatos } from "../../redux/reducers/SliceAlumnos";
import { v4 as uuid } from "uuid";

const formAlumnos = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const dispatch= useDispatch()
  return (
    <Formik
      initialValues={{
        nombre: "",
        email: "",
      }}
      validate={(valores) => {
        let errores = {};
        //Validacion name
        if (!valores.nombre) {
          errores.nombre = "Ingrese el nombre";
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

        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        
        dispatch(addDatos({...valores,id:uuid()
        
        }))
        resetForm();
        setFormEnviado(true);
        setTimeout(() => {
          setFormEnviado(false);
        }, 3000);
      }}
    >
      {/* RenderedProp renderizamos el formulario pero dentro de una funcion donde podremos nyectar valores formik*/}
      {({ errors }) => (
        <div className="  d-flex justify-content-center align-items-center">
          <div className=" col-md-11 p-11 shadow-sm rounded-3">
          

            <Form>
              <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                 Nombre del Alumno
                </label>
                <Field
                  type="text"
                  className="form-control "
                  id="input"
                  aria-describedby="nombre"
                  name="nombre"
                  placeholder="Gabriel Arguello"
                />
                <br />
                <ErrorMessage
                  name="nombre"
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.nombre}
                    </div>
                  )}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                 Correo Electronico del Alumno
                </label>
                <Field
                  type="email"
                  className="form-control  "
                  id="input2"
                  name="email"
                  placeholder="name@example.com"
                  autoComplete="on"
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
             
              <div className="d-grid">
                <button className="ingresar" type="submit">
                  <FaFolderPlus />
                </button>
              </div>
              <br />
              {formEnviado && (
                <div className="alert alert-success" role="alert">
                  Alumno Agregado 💬
                </div>
              )}
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default formAlumnos;
