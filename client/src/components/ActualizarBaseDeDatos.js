import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import { Card, Button } from 'react-bootstrap'
import botonContext from '../context/botonContext';


function ActualizarBaseDeDatos()  {

    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");
    const [usuariodata, setUsuariodata] = useState("");
    const [info, setInfo] = useState("");
    const actualizacion = useContext(botonContext)
    const [resultados, setResultados] = useState("")
    

    const actualizar = () => {
    fetch(`https://ergast.com/api/f1/current/last/results.json`)
            .then(res => res.json())
            .then(json => { setResultados(json.MRData.RaceTable.Races[0]); console.log(json.MRData.RaceTable.Races[0]) })


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ resultados }),
        };

        fetch("actualizar", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.resultados)

            });
          }
      

      


     //<Button onClick={() => vender(piloto.userid, piloto.id_piloto)} >Vender</Button> 


  
     
    return (
    <Button variant="success" onClick={() => actualizar()} > {actualizacion}</Button>
                  
                  
    )

    
    
  }
    export default ActualizarBaseDeDatos;