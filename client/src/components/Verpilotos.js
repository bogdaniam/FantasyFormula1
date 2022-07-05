import React, { useEffect, useState } from 'react'
import './Verpilotos.css';
import { Card } from 'react-bootstrap'


function Verpilotos() {

  //const foto = "albon.jpg"
  const [pilotos, setPilotos] = useState("");
  console.log(pilotos)
  useEffect(() => {
   
    fetch("verPilotos")
    .then((res) => res.json())
    .then(res => { console.log(res); setPilotos(res) })

  }, [])

  return (
    <div className="App">

      {pilotos ? pilotos.map((piloto, i) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`./img/${piloto.foto}`} />
            <Card.Body>
              <Card.Title>{piloto.nombre}</Card.Title>
              <Card.Text>{piloto.apellido}</Card.Text>
            </Card.Body>
          </Card>
        )
      }) : <p className="cargando"> Cargando Pilotos . . . </p>}

    </div>
  );
}

export default Verpilotos;
