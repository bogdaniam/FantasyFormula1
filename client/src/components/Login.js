import React, { useState } from "react";
import "../components/Login.css";
import { Form, Button } from 'react-bootstrap';



const Login = (props) => {

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
              //logNombre: res.nombre,
              //logApellido: res.apellido,
              //rol: res.rol,

            }));
            window.location.assign("/verpilotos");
          } else {
            //alert("Usuario o contraseña incorrectos")
          }
        }
          , 1000);
      });
  }

  const recuperar = () => {
    window.location.assign("/pwrecover");

          }







  return (
    <div className="flex">
      <h1 class="aviso">{message ? message : "Bienvenido"}</h1>
      <div class="recuperarcontrasena">
      <Form.Label for="usuarioLogin">Introduce tu email</Form.Label>
      <Form.Control if="usuarioLogin" type="text" onChange={(e) => setUser(e.target.value)} />
      <Form.Label for="contrasenaLogin">Introduce tu contraseña</Form.Label>
      <Form.Control id="contrasenaLogin" type="password" onChange={(e) => setContrasena(e.target.value)} />
      <br />
      <Button onClick={() => sendData()}>Log in</Button>
      <br />
      <br />
      <Form.Label for="usuarioLogin">Se te ha olvidado la contraseña?¿</Form.Label>
      <Button onClick={() => recuperar()}>Recuperar contraseña</Button>
      </div>


    </div>
  );
};

export default Login;
