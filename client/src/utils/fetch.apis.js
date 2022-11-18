
const backendEndpoint = 'http://127.0.0.1:3000'


export const registrarnuevoUsuario = async (valores) => {

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
          const errores = {}
          if (!res.errores) {
            errores.user="Usuario agregado correctamente"
      
          } else {
           errores.user="El usuario ya existe por favor ingrese otro 😊"
          }

          return errores
        },
        (errors) => {
          console.log(errors);
        }
      );

    // console.log(options);
};

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


