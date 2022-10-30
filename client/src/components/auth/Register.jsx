import "../../styles/index.css";
import { FaReply,FaRegEdit } from "react-icons/fa";
import React, {useState, Fragment} from 'react' //useEffect,
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import swal from "sweetalert";

const initialForm = {
  nombre_usuario: '',
  email: '',
  rol:'',
  password: ''
};

const InicioSesionExitosa = () => {
  swal({
    title: "Usuario Guardado Correctamente",
    text: "Bienvenido",
    icon: "success",
    timer: "1000",
    showCancelButton: false,
    showConfirmButton: false,
  }).then(() => {
    history.push("/login");
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

function Register() {

    // Instancia las validaciones con yup
    const validationRegister = Yup.object().shape({
      nombre_usuario: Yup.string()
        .required('El Username es requerido')
        .min(6, 'El Username debe contener mas de 6 caracteres')
        .max(15, 'El Username no debe exceder los 15 caracteres')
        .matches(/^[aA-zZ\s]+$/ , 'Solo se admiten caracteres'),
      email: Yup.string()
        .required('El Email es requerido')
        .email('El formato del Email es invalido'),
        rol: Yup.string()
        .required('El rol es requerido'),
      password: Yup.string()
        .required('El Password es requerido')
        .max(15, 'El Password no debe exceder los 15 caracteres')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/ , 'La Contraseña debe contener más de 6 caracteres, una mayuscula, una miniscula, un numero y un caracter especial'),

  });

  const [form, setForm] = useState(initialForm)
  const handleChange = (e)=>{
      setForm(
        {
          ...form,
          [e.target.name]:e.target.value
        }
      )
      // console.log(form);
  }

const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(validationRegister)});

const history = useHistory();



const registrarnuevoUsuario = async () => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(form),
    redirect: 'follow'
  }

  fetch('', options)
  .then(res => res.json())
  .then(
    (res)=> {

      if (!res.errores){
        // console.log(res) 
        setMostrarMensaje({message: 'Usuario agregado correctamente' , style: 'alert alert-success'});

        setTimeout(()=>{
          setMostrarMensaje(null)
          history.push('/login')
        }, 3000)

      }else {
        setMostrarMensaje({message: 'El usuario ya existe' , style: 'alert alert-danger'});
        
        setTimeout(()=>{
          setMostrarMensaje(null)
        
        }, 3000)
      }
      



      }, 
    (errors) => { console.log(errors) })


    // console.log(options);

}


const [mostrarMensaje,setMostrarMensaje] = useState(null)



  return (
    <div className="fondoLogin vh-100 d-flex justify-content-center align-items-center">
      <div className="login col-md-4 p-5 shadow-sm rounded-3">
        <h2 className="text-center mb-4 ">Bienvenido</h2>
        {mostrarMensaje != null ?<p className={mostrarMensaje.style}>{mostrarMensaje.message}</p>:null}
        <form onSubmit={handleSubmit(registrarnuevoUsuario)}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
             Nombre de Usuario
            </label>
            <input
              type="text"
              id="input"
              aria-describedby="emailHelp"
              placeholder="Nombre de Usuario"
                
                {...register('nombre_usuario')}
                className={`form-control ${errors.nombre_usuario ? 'is-invalid' : ''}`}
                onChange = { handleChange }
            />
             <div className="invalid-feedback">{errors.nombre_usuario?.message}</div>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Correo Electronico
            </label>
            <input type="email"  id="input" placeholder="name@example.com"

                    {...register('email')}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}

                    onChange = { handleChange } />
                     <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="mb-3">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Elegir un Rol</option>
            <option value="1">Alumno 👨‍🎓👩‍🎓 </option>
            <option value="2">Profesor 👩‍🏫👨‍🏫</option>
            <option value="3">Administrativo 👩‍💼👨‍💼</option>
          </select>
          <div className="invalid-feedback">{errors.nombre_usuario?.message}</div>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Contraseña
            </label>
            <input type="password"  id="input"  placeholder="*******"

            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}

            onChange = { handleChange } />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="d-grid">
            <button className="ingresar" type="submit">
              <FaRegEdit/>
            </button>
          </div>
        </form>
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
  );
      }



export default Register;
