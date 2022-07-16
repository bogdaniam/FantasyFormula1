import React, { useEffect, useState } from 'react'
import './Verpilotos.css';
import { Card, Button } from 'react-bootstrap'
import PilotosUsuarios from './PilotosUsuario';



function Verpilotos(props) {

  const [pilotos, setPilotos] = useState("");
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [usuariodata, setUsuariodata] = useState("");
  const [info, setInfo] = useState("");
  //console.log(pilotos)
  // const requestOptions = {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     logId: JSON.parse(localStorage.getItem('user')).logId
  //   }),
  // };

  // fetch("registro", requestOptions)
  //   .then((response) => response.json())
  //   .then((res) => setMessage(res.message));

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
      .then(res => { console.log(res); setPilotos(res.pilotosTodos); setMessage(res.mensaje); setMessage2(res.mensaje2); setUsuariodata(res.usuarioData) })


    //para ver todos los pilotos
    // fetch("verPilotos")
    //   .then((res) => res.json())
    //   .then(res => { console.log(res); setPilotos(res) })
    console.log(pilotos)
  }, [])

  //console.log(user)

  return (
    <div className="flex" class="divpilotos">
      <div class="divdatosusuario">

        <p class="datosusuario"><b>Nombre:</b> <span> {usuariodata.nombre}</span></p>
        <p class="datosusuario"><b>Apellido:</b> <span> {usuariodata.apellido}</span></p>
        <p class="datosusuario"><b>Presupuesto:</b> <span> {usuariodata.presupuesto} €</span></p>
      </div>

      <p className="cargando"> Pilotos Activos</p>

      <div class="contenedorinfopiloto">
        <p class="ocultar" onClick={() => ocultar()}><b>X</b></p>
        
        <h1>Nombre y Apellido: {info.nombre} {info.apellido}</h1>
        <h3>Fecha nacimiento: {info.fechanacimiento}</h3>
        <h3>Lugar de nacimiento: {info.lugarnacimiento}</h3>
        <h3>Equipo actual: {info.equipoactual}</h3>
        <h5>Info</h5>
        <p>{info.infopiloto}</p>
      </div>

      <PilotosUsuarios />
      <div class="pilotosusuario">

        {pilotos[0] ? pilotos[0].map((piloto, i) => {
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

        {message2 ?

          pilotos[1] ? pilotos[1].map((piloto, i) => {
            return (
              <Card style={{ width: '18rem' }} key={i}>
                <Card.Img variant="top" src={`./img/${piloto.foto}`} />

                <Card.Body>
                  <Card.Title>{piloto.nombre}</Card.Title>
                  <Card.Text>{piloto.apellido}</Card.Text>
                  <Card.Text>{piloto.precio} €</Card.Text>
                  <div class="divbotones">

                    <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
                    <Button onClick={() => activar(piloto.userid, piloto.id_piloto)} variant="secondary">Activar</Button>
                    <Button onClick={() => verinfo(piloto.id_piloto)} variant="info">Info</Button>
                  </div>

                </Card.Body>
              </Card>
            )
          }) : <p className="cargando"> Cargando Pilotos . . . </p>

          : pilotos[1] ? pilotos[1].map((piloto, i) => {
            return (
              <Card style={{ width: '18rem' }} key={i}>
                <Card.Img variant="top" src={`./img/${piloto.foto}`} />

                <Card.Body>
                  <Card.Title>{piloto.nombre}</Card.Title>
                  <Card.Text>{piloto.apellido}</Card.Text>
                  <Card.Text>{piloto.precio} €</Card.Text>
                  <div class="divbotones">

                    <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
                    <Button onClick={() => activar(piloto.userid, piloto.id_piloto)} variant="secondary" disabled>Activar</Button>
                    <Button onClick={() => verinfo(piloto.id_piloto)} variant="info">Info</Button>

                  </div>

                </Card.Body>
              </Card>
            )
          }) : <p className="cargando"> Cargando Pilotos . . . </p>}

      </div>

      <p className="cargando"> Pilotos Restantes</p>
      <div class="pilotosusuario">

        {message ?

          pilotos[2] ? pilotos[2].map((piloto, i) => {
            return (
              <Card style={{ width: '18rem' }} key={i}>
                <Card.Img variant="top" src={`./img/${piloto.foto}`} />

                <Card.Body>
                  <Card.Title>{piloto.nombre}</Card.Title>
                  <Card.Text>{piloto.apellido}</Card.Text>
                  <Card.Text>{piloto.precio} €</Card.Text>
                  <div class="divbotones">

                    <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)}>Comprar</Button>
                    <Button onClick={() => verinfo(piloto.id_piloto)} variant="info">Info</Button>

                  </div>

                </Card.Body>
              </Card>
            )
          }) : <p className="cargando"> Cargando Pilotos . . . </p>

          : pilotos[2] ? pilotos[2].map((piloto, i) => {
            return (
              <Card style={{ width: '18rem' }} key={i}>
                <Card.Img variant="top" src={`./img/${piloto.foto}`} />

                <Card.Body>
                  <Card.Title>{piloto.nombre}</Card.Title>
                  <Card.Text>{piloto.apellido}</Card.Text>
                  <Card.Text>{piloto.precio} €</Card.Text>
                  <div class="divbotones">

                    <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)} disabled>Comprar</Button>
                    <Button onClick={() => verinfo(piloto.id_piloto)} variant="info">Info</Button>

                  </div>

                </Card.Body>
              </Card>
            )
          }) : <p className="cargando"> Cargando Pilotos . . . </p>}



        {pilotos[3] ? pilotos[3].map((piloto, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
              <Card.Img variant="top" src={`./img/${piloto.foto}`} />

              <Card.Body>
                <Card.Title>{piloto.nombre}</Card.Title>
                <Card.Text>{piloto.apellido}</Card.Text>
                <Card.Text>{piloto.precio} €</Card.Text>
                <div class="divbotones">
                  <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)} variant="danger" disabled>Comprar</Button>
                  <Button onClick={() => verinfo(piloto.id_piloto)} variant="info">Info</Button>


                </div>

              </Card.Body>
            </Card>
          )
        }) : <p className="cargando"> Cargando Pilotos . . . </p>}



      </div>
    </div>
  );
}

export default Verpilotos;
