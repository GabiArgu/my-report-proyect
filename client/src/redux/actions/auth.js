const backendEndpoint = 'http://127.0.0.1:3000'


//Registro de usuario
export const registrarnuevoUsuario = async (valores,errores) => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(valores),
      redirect: "follow",
    };

    fetch(backendEndpoint + "/api/users", options)
      .then((res) => res.json())
      .then(
        (res) => {
          if (!res.errores) {
            errores.nombreUsuario="Usuario agregado correctamente"
          } else {
           errores.nombreUsuario="El usuario ya existe por favor ingrese otro 😊"
          }

          return errores
        },
        (errors) => {
          console.log(errors);
        }
      );

    // console.log(options);
};
//Login Usuario
export const loginusuario = async (valores)=>{

    const res = await fetch(backendEndpoint + "/api/users/login",{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(valores)
      });
      const response = await res.json();
      const errores = {}
      //Si la consulta es devuelve el token lo guardamos en el contexto de la sesión 
      if(response.token){
        localStorage.setItem('rstoken', response.token)
        console.log(response.token)
        setSession({token})
        errores.user="Inicio de Sesion exitoso Bienvenido"
      

      }else{
      
         errores.user="Los datos no coinciden intente de nuevo😊"
        

        return errores
      }
 
}

    
//     const config = {
//         headers: {
//             'Content-Type':'application/json'
//         }
//     }

//     const body = JSON.stringify({email, password})

//     //console.info('body=>',body)

//     try {
//         const res = await axios.post('/back/api/auth', body, config)

//         console.log(res.data)

//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         })

//         dispatch(loadUser())
        
//     } catch (err) {

//         const errors = err.response.data.errors

//         if(errors){
//             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
//         }
        
//         dispatch({
//             type: LOGIN_FAIL
//         })
//     }
// }

// export const loadUser = () => async dispatch => {

//     if(localStorage.token) {
//         setAuthToken(localStorage.token)
//     }

//     try {
        
//         const res = await axios.get('back/api/auth')

//         dispatch({
//             type: USER_LOADED,
//             payload: res.data
//         })

//     } catch (error) {
//         dispatch({
//             type: AUTH_ERROR
//         })
//     }
// }

// export const logout = () => dispatch => {
//    dispatch({type : LOGOUT }) 
//    dispatch({type: CLEAR_PROFILE})
// } 