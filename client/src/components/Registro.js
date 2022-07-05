import React, { useState } from "react";
import "./Registro.css";

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
      .then((res) => setMessage(res.message));
  };



  return (
    <div className="flex">
      <h1>{message ? message : "Registro"}</h1>

      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <input type="text" onChange={(e) => setApellido(e.target.value)} />
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <input type="text" onChange={(e) => setContrasena(e.target.value)} />
      <button onClick={() => sendData()}>Registro</button>


    </div>
  );
};

export default Registro;
