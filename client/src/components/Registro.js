import React, { useState } from "react";
import "../components/Login.css";

const Registro = () => {
  const [message, setMessage] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("")
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("")









  const sendData = () => {
    console.log(nombre)
    console.log(apellido)
    console.log(user)
    console.log(contrasena)
    let respuesta = {name: nombre, lastname: apellido, email: user, password: contrasena}
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };
    console.log(respuesta)
    fetch("registro", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setMessage(res.message); window.location.assign("/login");
      });
      
  };



  return (
    <div className="flex">
      <h1>{message ? message : "Registro"}</h1>
      <label for="nombreRegistro">Introduce tu nombre</label>
      <input id="nombreRegistro" type="text" onChange={(e) => setNombre(e.target.value)} />

      <label for="apellidoRegistro">Introduce tu apellido</label>
      <input id="apellidoRegistro" type="text" onChange={(e) => setApellido(e.target.value)} />

      <label for="emailRegistro">Introduce tu email</label>
      <input id="emailRegistro" type="text" onChange={(e) => setUser(e.target.value)} />

      <label for="contrasenaRegistro">Introduce tu contrasena</label>
      <input id="contrasenaRegistro" type="text" onChange={(e) => setContrasena(e.target.value)} />
      <br/>
      <button onClick={() => sendData()}>Registro</button>


    </div>
  );
};

export default Registro;
