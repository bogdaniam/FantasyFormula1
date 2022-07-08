import React, { useEffect, useState } from 'react'
import './Verpilotos.css';
import { Card, Button } from 'react-bootstrap'


function Verpilotos() {

  const [pilotos, setPilotos] = useState("");
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

const vender = () => {
  console.log("vendido")
}




  useEffect(() => {

    //para ver los pilotos de un usuario
    let respuesta = {logId: JSON.parse(localStorage.getItem('user')).logId}
    console.log(respuesta)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ respuesta }),
    };
    fetch("verPilotos", requestOptions)
      .then((res) => res.json())
      .then(res => { console.log(res); setPilotos(res) })


    //para ver todos los pilotos
    // fetch("verPilotos")
    //   .then((res) => res.json())
    //   .then(res => { console.log(res); setPilotos(res) })

  }, [])

  return (
    <div className="flex" class="divpilotos">

      {pilotos ? pilotos.map((piloto, i) => {
        return (
          <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={`./img/${piloto.foto}`} />
            
            <Card.Body>
              <Card.Title>{piloto.nombre}</Card.Title>
              <Card.Text>{piloto.apellido}</Card.Text>
              <Button onClick={()=>vender()} >Verder</Button>
            </Card.Body>
          </Card>
        )
      }) : <p className="cargando"> Cargando Pilotos . . . </p>}

    </div>
  );
}

export default Verpilotos;
