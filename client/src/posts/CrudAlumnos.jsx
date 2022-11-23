import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import AlumnosTableCrud from "../components/posts/AlumnosTableCrud";
import FormAlumnos from "./forms/FormAlumnos";
import { useGetPersonasQuery } from "../api/apiSlice";

const CrudAlumnos = () => {
  //En esta funcion leemos datos del store y lo asignamos a esta constante estadoAlumno
  const estadoAlumnos = useSelector((state) => state.Alumnos);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Estados al momento de hacer el GET
//   const { Data, isError, isLoading, error } = useGetPersonasQuery();
//   const datosAlumnos= Data
// console.log(datosAlumnos)
  // if (isLoading) {
  //   return <div>...Loading</div>;
  // } else if (isError) {
  //   return <div>Error:{error}</div>;
  // } else {
  //   console.log(Data);
  // }
  return (
    <>
      

      <div className="container ">
        <div className="col">
          <Button variant="dark" onClick={handleShow}>
            Agregar
          </Button>

          <Modal id="modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Agregar Alumnos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormAlumnos />
            </Modal.Body>
          </Modal>
          <div className="md-3 text-center">
            <AlumnosTableCrud />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudAlumnos;
