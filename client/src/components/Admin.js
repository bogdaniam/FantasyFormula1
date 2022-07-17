import React, { useEffect, useState } from 'react'
import './Ranking.css';
import { Card, Button, Form } from 'react-bootstrap'


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







    fetch("actualizar")
        .then((res) => res.json())
        .then((res) => {

        });



    return (
        <div className="flex" class="admin">
            <div class="actualizar">
                {/* <Form.Label>Actualizar la base de datos</Form.Label> */}
                <Button onClick={() => actualizarResultados()} >Actualizar Base de datos</Button>
            </div>

            <div class="usuarios">

                <div class="usuario">
               
                
                    <Card style={{ width: '90%' }}  >

                        <Card.Body class="usuario">
                            <Card.Title style={{ width: '40%' }}>Nombre y Apellido </Card.Title>

                            <Card.Title style={{ width: '40%' }}>  Email </Card.Title>
                            <h1 style={{ width: '10%' }} ></h1>

                        </Card.Body>
                    </Card>
                </div>

                {usuarios ? usuarios.map((user, i) => {
                    return (
                        <div class="usuario">
                            <Card style={{ width: '90%' }} key={i} >

                                <Card.Body class="usuario">
                                    <Card.Title style={{ width: '40%' }}>{i + 1}. {user.nombre} {user.apellido} </Card.Title>

                                    <Card.Title style={{ width: '40%' }}>  {user.email} </Card.Title>

                                    <Button style={{ width: '10%' }} onClick={() => deleteUser(user.id_usuario)} >Borrar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }) : ""}

            </div>





        </div>
    );
}

export default Admin;
