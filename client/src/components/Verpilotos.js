import React, { useEffect, useState } from 'react'
import './Verpilotos.css';
import { Card, Button } from 'react-bootstrap'


function Verpilotos() {

  const [pilotos, setPilotos] = useState("");
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
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
        setInterval(() => { window.location.assign("/verpilotos"); }, 300);
      });
  }


  const comprar = (user, id) => {
    //console.log(`Usuario ${user}`)
    //console.log(`id ${id}`)
    //console.log("comprado")

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
      .then(res => { console.log(res); setPilotos(res.pilotosTodos); setMessage(res.mensaje); setMessage2(res.mensaje2); setPresupuesto(res.presupuesto) })


    //para ver todos los pilotos
    // fetch("verPilotos")
    //   .then((res) => res.json())
    //   .then(res => { console.log(res); setPilotos(res) })

  }, [])

  //console.log(user)

  return (
    <div className="flex" class="divpilotos">
      <p className="cargando"> {presupuesto} €</p>
      <p className="cargando"> Pilotos Activos</p>

      <div class="pilotosusuario">

        {pilotos[0] ? pilotos[0].map((piloto, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
              <Card.Img variant="top" src={`./img/${piloto.foto}`} />

              <Card.Body>
                <Card.Title>{piloto.nombre}</Card.Title>
                <Card.Text>{piloto.apellido}</Card.Text>
                <Card.Text>{piloto.precio} €</Card.Text>
                <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
                <Button onClick={() => desactivar(piloto.userid, piloto.id_piloto)} variant="success">Desactivar</Button>
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
          <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
          <Button onClick={() => activar(piloto.userid, piloto.id_piloto)} variant="secondary">Activar</Button>
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
              <Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button>
              <Button onClick={() => activar(piloto.userid, piloto.id_piloto)} variant="secondary" disabled>Activar</Button>
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
                <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)}>Comprar</Button>
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
                <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)} disabled>Comprar</Button>
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
            <Button onClick={() => comprar(piloto.userid, piloto.id_piloto)} variant="danger" disabled>Comprar</Button>
          </Card.Body>
        </Card>
      )
    }) : <p className="cargando"> Cargando Pilotos . . . </p>}



      </div>
    </div>
  );
}

export default Verpilotos;
