import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import { Card, Button } from 'react-bootstrap'
//import botonVenderActivo from './botonVenderActivo';


const PilotosUsuarios = (props) => {
    
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
// <botonVenderActivo />


      const activar = (user, id) => {
        console.log("Piloto activado")
        let respuesta = { user: user, id: id }
        console.log(respuesta)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ respuesta }),
        };
        fetch("activar", requestOptions)
          .then((res) => res.json())
          .then((res) => {
            setInterval(() => { window.location.assign("/verpilotos"); }, 300);
          });
      }

      const desactivar = (user, id) => {
        console.log("Piloto desactivado")
        let respuesta = { user: user, id: id }
        console.log(respuesta)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ respuesta }),
        };
        fetch("desactivar", requestOptions)
          .then((res) => res.json())
          .then((res) => {
            setInterval(() => { window.location.assign("/verpilotos"); }, 1000);
          });
      }

      const verinfo = (id) => {
        let test = document.querySelector(".contenedorinfopiloto")
        if (test.style.display == 'block') {
          test.style.display = 'none';
        } else {
          test.style.display = 'block'
        }
    
        let respuesta = { idpiloto: id }
        //console.log(respuesta)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ respuesta }),
        };
        fetch("infopilotos", requestOptions)
          .then((res) => res.json())
          .then((res) => { console.log(res); setInfo(res) });
      }


      const ocultar = () => {
        let test = document.querySelector(".contenedorinfopiloto")
        if (test.style.display == 'inline') {
          test.style.display = 'block';
        } else {
          test.style.display = 'none'
        }
      }


      useEffect(() => {

        //para ver los pilotos de un usuario
        let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId }
        console.log(respuesta)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ respuesta }),
        };
        fetch("verPilotos", requestOptions)
          .then((res) => res.json())
          .then(res => { console.log(res); setMessage(res.mensaje); setMessage2(res.mensaje2); setUsuariodata(res.usuarioData) })

        }, [])

    return (
        <div>
        
        {props.pilotoA ? props.pilotoA.map((piloto, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
              <Card.Img variant="top" src={`./img/${piloto.foto}`} />

              <Card.Body>
                <Card.Title>{piloto.nombre}</Card.Title>
                <Card.Text>{piloto.apellido}</Card.Text>
                <Card.Text>{piloto.precio} €</Card.Text>
                <div class="divbotones">
                <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
               

                  <Button onClick={() => desactivar(piloto.userid, piloto.id_piloto)} variant="success">Desactivar</Button>
                  <Button onClick={() => verinfo(piloto.id_piloto)} variant="info">Info</Button>
                </div>
              </Card.Body>
            </Card>
          )
        }) : <p className="cargando"> Cargando Pilotos . . . </p>}
         
    </div>
    )
    }
    export default PilotosUsuarios;