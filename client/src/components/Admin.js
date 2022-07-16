import React, { useEffect, useState } from 'react'
import './Ranking.css';
import { Card, Button } from 'react-bootstrap'


function Admin(props) {

    const [usuarios, setUsuarios] = useState("");
    const [resultados, setResultados] = useState("")
    useEffect(() => {

        fetch("administrarUsuarios")
            .then((res) => res.json())
            .then(res => { console.log(res); setUsuarios(res.usuarios) })

    }, [])

    const deleteUser = (id) => {
        let respuesta = { id: id }
        console.log(respuesta)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ respuesta }),
        };
        fetch("deleteUser", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setUsuarios(res.usuariosN);

            });
    }

    const actualizarResultados = () => {
        fetch(`https://ergast.com/api/f1/current/last/results.json`)
            .then(res => res.json())
            .then(json => {setResultados(json.MRData.RaceTable.Races[0]);console.log(json.MRData.RaceTable.Races[0])})


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ resultados }),
        };

        fetch("actualizar", requestOptions)
        .then((res) => res.json())
        .then((res) => {console.log(res.resultados)

        });
    }







    fetch("actualizar")
        .then((res) => res.json())
        .then((res) => {

        });



return (
    <div className="flex" class="ranking">
        <Button onClick={() => actualizarResultados()} >Actualizar</Button>
        {usuarios ? usuarios.map((user, i) => {
            return (
                <Card style={{ width: '90%' }} key={i} >

                    <Card.Body>
                        <Card.Title>{i + 1}. {user.nombre} {user.apellido} </Card.Title>

                        <Card.Title>  {user.email} </Card.Title>

                        <Button onClick={() => deleteUser(user.id_usuario)} >Borrar</Button>
                    </Card.Body>
                </Card>
            )
        }) : <p className="cargando"> Cargando Usuarios . . . </p>}







    </div>
);
}

export default Admin;
