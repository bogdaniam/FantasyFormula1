import React, { useState } from "react";
import "../components/Login.css";
import { Form, Button } from 'react-bootstrap';

const Registro = () => {
  const [message, setMessage] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("")
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("")









  const sendData = () => {
    //console.log(nombre)
    //console.log(apellido)
    //console.log(user)
    //console.log(contrasena)
    let respuesta = {name: nombre, lastname: apellido, email: user, password: contrasena}
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };
    //console.log(respuesta)
    fetch("registro", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setMessage(res.message); window.location.assign("/login");
      });
      
  };



  return (
    <div className="flex">
      <h1 class="aviso">{message ? message : "Registro"}</h1>

      <div class="recuperarcontrasena">
      <Form.Label for="nombreRegistro">Introduce tu nombre</Form.Label>
      <Form.Control id="nombreRegistro" type="text" onChange={(e) => setNombre(e.target.value)} />

      <Form.Label for="apellidoRegistro">Introduce tu apellido</Form.Label>
      <Form.Control id="apellidoRegistro" type="text" onChange={(e) => setApellido(e.target.value)} />

      <Form.Label for="emailRegistro">Introduce tu email</Form.Label>
      <Form.Control id="emailRegistro" type="text" onChange={(e) => setUser(e.target.value)} />

      <Form.Label for="contrasenaRegistro">Introduce tu contrasena</Form.Label>
      <Form.Control id="contrasenaRegistro" type="password" onChange={(e) => setContrasena(e.target.value)} />
      <br/>
      <Button onClick={() => sendData()}>Registro</Button>
      </div>

    </div>
  );
};

export default Registro;
