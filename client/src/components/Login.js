import React, { useState } from "react";
import "./Login.css";

const login = () => {
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

    fetch("login", requestOptions)
      .then((response) => response.json())
      .then((res) => setMessage(res.message));
  };



  return (
    <div className="App">
      <h1>{message ? message : "Introduce tus credenciales"}</h1>


      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <input type="text" onChange={(e) => setContrasena(e.target.value)} />
      <button onClick={() => sendData()}>Log in</button>


    </div>
  );
};

export default login;
