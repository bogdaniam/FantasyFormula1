import React, { useEffect, useState } from 'react'
import './Verpilotos.css';
import { Card, Button } from 'react-bootstrap'
import PilotosUsuarios from './PilotosUsuario';
import UseFetch from "../hooks/useFetch";


function Verpilotos(props) {

  const [pilotos, setPilotos] = useState("");
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  //const [usuariodata, setUsuariodata] = useState("");
  const [usuariodata, setUsuariodata] = UseFetch("");
  const [info, setInfo] = useState("");
  

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
      .then(res => { console.log(res.mensaje2); setPilotos(res.pilotosTodos); setMessage(res.mensaje); setMessage2(res.mensaje2) })


    //para ver todos los pilotos
    // fetch("verPilotos")
    //   .then((res) => res.json())
    //   .then(res => { console.log(res); setPilotos(res) })
    //console.log(pilotos)
  }, [])

  //console.log(pilotos[2])
  //console.log(typeof pilotos[2])

  return (
    <div className="flex" class="divpilotos">
      <div class="divdatosusuario">

        <p class="datosusuario"><b>Nombre:</b> <span> {usuariodata.nombre}</span></p>
        <p class="datosusuario"><b>Apellido:</b> <span> {usuariodata.apellido}</span></p>
        <p class="datosusuario"><b>Presupuesto:</b> <span> {usuariodata.presupuesto} €</span></p>
      </div>

      {/* {pilotos[2].length != 20 ? <p className="cargando"> Pilotos Activos</p> : ""} */}

      <div class="contenedorinfopiloto">
        <p class="ocultar" onClick={() => ocultar()}><b>X</b></p>
        
        <h1>Nombre y Apellido: {info.nombre} {info.apellido}</h1>
        <h3>Fecha nacimiento: {info.fechanacimiento}</h3>
        <h3>Lugar de nacimiento: {info.lugarnacimiento}</h3>
        <h3>Equipo actual: {info.equipoactual}</h3>
        <h5>Info</h5>
        <p>{info.infopiloto}</p>
      </div>

      
      <div class="pilotosusuario">
      <PilotosUsuarios pilotoA={pilotos[0]} boton={0}/>
        

        {message2 ?

          <PilotosUsuarios pilotoA={pilotos[1]} boton={1}/>

          :<PilotosUsuarios pilotoA={pilotos[1]} boton={2}/>

      }

      </div>

      <p className="cargando"> Pilotos Restantes</p>
      <div class="pilotosusuario">

        {message ?

<PilotosUsuarios pilotoA={pilotos[2]} boton={3}/>
          
:<PilotosUsuarios pilotoA={pilotos[2]} boton={4}/>

        }


<PilotosUsuarios pilotoA={pilotos[3]} boton={5}/>
        



      </div>
    </div>
  );
}

export default Verpilotos;
