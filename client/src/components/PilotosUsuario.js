import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import UseFetch from "../hooks/useFetch";
import Verpilotos from './Verpilotos';


const PilotosUsuarios = (props) => {

  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  //const [usuariodata, setUsuariodata] = useState("");
  const [info, setInfo] = useState("");

  const comprar = (user, id) => {
    let respuesta = { user: user, id: id }
    console.log(respuesta)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ respuesta }),
    };
    fetch("comprar", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setInterval(() => {
          window.location.assign("/verpilotos");
        }
          , 300);
      });
  }

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
      .then((res) => { console.log(res); setInfo(res); props.setInfo1(res) });
    
  }


//console.log(props)



  useEffect(() => {

    //para ver los pilotos de un usuario
    let respuesta = { logId: JSON.parse(localStorage.getItem('user')).logId }
    //console.log(respuesta)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ respuesta }),
    };
    fetch("verPilotos", requestOptions)
      .then((res) => res.json())
      .then(res => { console.log(res); setMessage(res.mensaje); setMessage2(res.mensaje2) })
    //; setUsuariodata(res.usuarioData)
  }, [])


  function pintarBotones(boton, piloto) {
    if (boton == 0) {
      const boton = <div class="divbotones">
        <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
        <Button onClick={() => desactivar(piloto.userid, piloto.id_piloto)} variant="success">Desactivar</Button>
        <Button onClick={() => verinfo(piloto.id_piloto)} variant="light">Info</Button>
      </div>
      return boton
    }

    if (boton == 1) {
      const boton = <div class="divbotones">
        <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
        <Button onClick={() => activar(piloto.userid, piloto.id_piloto)} variant="secondary">Activar</Button>
        <Button onClick={() => verinfo(piloto.id_piloto)} variant="light">Info</Button>
      </div>
      return boton
    }

    if (boton == 2) {
      const boton = <div class="divbotones">
        <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
        <Button onClick={() => activar(piloto.userid, piloto.id_piloto)} variant="secondary" disabled>Activar</Button>
        <Button onClick={() => verinfo(piloto.id_piloto)} variant="light">Info</Button>
      </div>
      return boton
    }

    if (boton == 3) {
      const boton = <div class="divbotones">
        <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)}>Comprar</Button>
        <Button onClick={() => verinfo(piloto.id_piloto)} variant="light">Info</Button>
      </div>
      return boton
    }

    if (boton == 4) {
      const boton = <div class="divbotones">
        <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)} disabled>Comprar</Button>
        <Button onClick={() => verinfo(piloto.id_piloto)} variant="light">Info</Button>
      </div>
      return boton
    }

    if (boton == 5) {
      const boton = <div class="divbotones">
        <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)} variant="danger" disabled>Comprar</Button>
        <Button onClick={() => verinfo(piloto.id_piloto)} variant="light">Info</Button>
      </div>
      return boton
    }



  }




  return (
    <div>




      <div class="pilotosusuario">

      
    
        {props.pilotoA ? props.pilotoA.map((piloto, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
              <Card.Img variant="top" src={`./img/${piloto.foto}`} />

              <Card.Body>
                <Card.Title>{piloto.nombre}</Card.Title>
                <Card.Text>{piloto.apellido}</Card.Text>
                <Card.Text>{piloto.precio} €</Card.Text>

                {pintarBotones(props.boton, piloto)}



              </Card.Body>
            </Card>
          )
        }) : <p className="cargando"> Cargando Pilotos . . . </p>}

      </div>
    </div>
  )
}
export default PilotosUsuarios;