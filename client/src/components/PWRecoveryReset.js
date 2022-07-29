import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function PWRecoveryReset() {
    const { email, token} = useParams();
    const [contrasena, setContrasena] = useState("")
    const [message, setMessage] = useState("")


    const cambiarContrasena = () => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, contrasena: contrasena, token:token }),
        };

        fetch("pwrecoverReset", requestOptions)
        .then((res) => res.json())
        .then((res) => {
          setMessage(res.message); 
          
  
  
          setInterval(() => {
              window.location.assign("/login");
            }
              , 1000);
            });


    }


    return (
        <div class="password">
<h1 class="aviso" ><h1>{message ? message : "Recuperar contraseña"}</h1></h1>

            <div class="recuperarcontrasena">
                <Form.Label>Introduce tu nueva contraseña</Form.Label>
                <Form.Control type="password" onChange={(e) => setContrasena(e.target.value)} />

                <Button variant="primary" onClick={() => cambiarContrasena()}>
                    Recuperar contraseña
                </Button>
            </div>

        </div>
    );
}

export default PWRecoveryReset;