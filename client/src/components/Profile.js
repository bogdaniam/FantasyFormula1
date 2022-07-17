import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import "../components/Profile.css";


const Perfil = (props) => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");



  useEffect(() => {

    //para ver los pilotos de un usuario
    let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId }
    console.log(respuesta)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ respuesta }),
    };
    fetch("perfil", requestOptions)
      .then((res) => res.json())
      .then(res => {console.log(res); setUsuario(res)})

  }, [])


  const cambiarNombre = () => {
    let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId, nombre: nombre }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };
    fetch("cambiarNombre", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setInterval(() => {
          window.location.assign("/profile");
        }
          , 300);
      });
  }


  const cambiarApellido = () => {
    let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId, apellido: apellido }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };
    fetch("cambiarApellido", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setInterval(() => {
          window.location.assign("/profile");
        }
          , 300);
      });
  }

  const cambiarEmail = () => {
    let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId, email: email }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };
    fetch("cambiarEmail", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setInterval(() => {
          window.location.assign("/profile");
        }
          , 300);
      });
  }

  const cambiarContrasena = () => {
    let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId, contrasena: contrasena }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    };
    fetch("cambiarContrasena", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setInterval(() => {
          window.location.assign("/profile");
        }
          , 300);
      });
  }









  return (
    <div class="perfil">
      <div  class="datosUsuario">
      <h5>Nombre: {usuario.nombre}</h5>

      <h5>Apellido: {usuario.apellido}</h5>

      <h5>Email: {usuario.email}</h5>


      </div>

      <div class="cambiarDatos">
        <Form.Label>Introduce tu nuevo Nombre</Form.Label>
        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />

        <Button variant="primary" onClick={() => cambiarNombre()}>
          Cambiar Nombre
        </Button>
        <br />


        <Form.Label>Introduce tu nuevo Apellido</Form.Label>
        <Form.Control type="text" onChange={(e) => setApellido(e.target.value)} />
        <Button variant="primary" onClick={() => cambiarApellido()}>
          Cambiar Apellido
        </Button>
        <br />


        <Form.Label>Introduce tu nuevo Email</Form.Label>
        <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
        <Button variant="primary" onClick={() => cambiarEmail()}>
          Cambiar Email
        </Button>
        <br />


        <Form.Label>Introduce tu nueva contraseña</Form.Label>
        <Form.Control type="password" onChange={(e) => setContrasena(e.target.value)} />

        <Button variant="primary" onClick={() => cambiarContrasena()}>
          Cambiar Contraseña
        </Button>

      </div>




    </div>
  );
};

export default Perfil;
