import React, { useEffect, useState } from 'react'

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
      setInfo("")
    }
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

  }, [])

  // const recojerDatoHijo = (data) => {
  //   console.log(data)
  // }
console.log(info)

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
        
        <h3><span>Nombre y Apellido: </span><b>{info.nombre} {info.apellido}</b></h3>
        <h3><span>Fecha nacimiento: </span><b>{info.fechanacimiento}</b></h3>
        <h3><span>Lugar de nacimiento: </span><b>{info.lugarnacimiento}</b></h3>
        <h3><span>Equipo actual: </span><b>{info.equipoactual}</b></h3>
        <h5><span>Info</span></h5>
        <p><b>{info.infopiloto}</b></p>
      </div>

      
      <div class="pilotosusuario">
      <PilotosUsuarios pilotoA={pilotos[0]} boton={0} setInfo1={setInfo}/>
        

        {message2 ?

          <PilotosUsuarios pilotoA={pilotos[1]} boton={1} setInfo1={setInfo}/>

          :<PilotosUsuarios pilotoA={pilotos[1]} boton={2} setInfo1={setInfo}/>

      }

      </div>

      {/* <p className="cargando"> Pilotos Restantes</p> */}
      <div class="pilotosusuario">

        {message ?

<PilotosUsuarios pilotoA={pilotos[2]} boton={3} setInfo1={setInfo}/>
          
:<PilotosUsuarios pilotoA={pilotos[2]} boton={4} setInfo1={setInfo}/>

        }


<PilotosUsuarios pilotoA={pilotos[3]} boton={5} setInfo1={setInfo}/>
        



      </div>
    </div>
  );
}

export default Verpilotos;
