import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import { Card, Button } from 'react-bootstrap'


const botonVenderActivo = (props) => {
    
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    const [usuariodata, setUsuariodata] = useState("");
    const [info, setInfo] = useState("");

    
    
    const vender = (user, id) => {
        console.log("vendido")
        console.log(`Usuario ${user}`)
        console.log(`id ${id}`)
        let respuesta = { user: user, id: id }
        console.log(respuesta)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ respuesta }),
        };
    
        fetch("vender", requestOptions)
          .then((res) => res.json())
          .then((res) => {
            setInterval(() => { window.location.assign("/verpilotos"); }, 300);
          });
      }

      

      


     //<Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button> 


      

    return (
        <div>
        
        
                  
                  
         
    </div>
    )
    }
    export default botonVenderActivo;