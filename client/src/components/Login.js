import React, { useState } from "react";
import "../components/Login.css";



const Login = () => {

  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("")




  const sendData = () => {
    //console.log(user)
    //console.log(contrasena)
    let respuesta = { usuarioLogin: user, passwordLogin: contrasena }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };

  //   fetch("login", requestOptions)
  //     .then((response) => response.json())
  //     .then((res) => setMessage(res.message));
  // };
  fetch("login", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                setInterval(() => {
                    if (res.message === true) {
                        localStorage.setItem('user', JSON.stringify({
                            logId: res.id,
                            logNombre: res.nombre,
                            logApellido: res.apellido,
                            rol: res.rol,
                            
                        }));
                        //window.location.assign(“/UPage”);
                    } else {
                        alert("Usuario o contraseña incorrectos")
                    }
                }
                    , 1000);
            });
          }








  return (
    <div className="flex">
      <h1>{message ? message : "Bienvenido"}</h1>

      <label for="usuarioLogin">Introduce tu email</label>
      <input if="usuarioLogin" type="text" onChange={(e) => setUser(e.target.value)} />
      <label for="contrasenaLogin">Introduce tu contraseña</label>
      <input id="contrasenaLogin" type="text" onChange={(e) => setContrasena(e.target.value)} />
      <br/>
      <button onClick={() => sendData()}>Log in</button>


    </div>
  );
};

export default Login;
