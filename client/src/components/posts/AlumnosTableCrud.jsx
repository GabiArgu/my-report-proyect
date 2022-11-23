import { useState, useEffect, React } from "react";
import { useSelector } from "react-redux";
import "../../styles/index.css";
import { FaFolderPlus } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BsFillTrashFill, BsFillBrushFill } from "react-icons/bs";
import { deleteDatos,editDatos } from "../../redux/reducers/SliceAlumnos";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { useGetPersonasQuery } from "../../api/apiSlice";


const AlumnosTableCrud = () => {
  const estadoAlumnos = useSelector((state) => state.Alumnos);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteDatos(id));
  };
  const [formEnviado, setFormEnviado] = useState(false);
  const [initialValues, setInitialValues] = useState({
    nombre:"",
    email:""
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleEdit = (id) => {

    setShow(true);
    console.log(id);
    if(id){
      setInitialValues(estadoAlumnos.find((estado)=> estado.id===id))
    }
  };
  // //Estados al momento de hacer el GET
  // const { Data, isError, isLoading, error } = useGetPersonasQuery();
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
            {estadoAlumnos.map((alumno) => (
              <>
                <Modal id="modal" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Editar Alumnos</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Formik
                      initialValues={
                        initialValues
                      }
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
                          errores.email =
                            "El correo debe contener formato de correo";
                        }

                        return errores;
                      }}
                      onSubmit={(valores) => {
                        dispatch(editDatos(valores))
                     
                        setFormEnviado(true);
                       
                        setTimeout(() => {
                          setFormEnviado(false);
                          handleClose()
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
                                    <div
                                      className="alert alert-danger"
                                      role="alert"
                                    >
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
                                    <div
                                      className="alert alert-danger"
                                      role="alert"
                                    >
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
                                <div
                                  className="alert alert-success"
                                  role="alert"
                                >
                                  Alumno Editado 📝
                                </div>
                              )}
                            </Form>
                          </div>
                        </div>
                      )}
                    </Formik>
                  </Modal.Body>
                </Modal>
                <tr key={alumno.id}>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.email}</td>
                  <td>
                    {" "}
                    <button
                      className="ingresar"
                      onClick={() => handleDelete(alumno.id)}
                      type="submit"
                    >
                      <BsFillTrashFill />
                    </button>
                    <button
                      className="ingresar"
                      onClick={() => handleEdit(alumno.id)}
                    >
                      <BsFillBrushFill />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AlumnosTableCrud;
