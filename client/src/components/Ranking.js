import React, { useEffect, useState } from 'react'

import { Card } from 'react-bootstrap'


function Ranking(props) {

    const [ranking, setRanking] = useState("");
    useEffect(() => {

        fetch("ranKing")
            .then((res) => res.json())
            .then(res => { console.log(res); setRanking(res) })

    }, [])



    return (
        <div className="ranking">

            {ranking ? ranking.map((rank, i) => {
                return (
                    <Card style={{ width: '18rem' }} key={i} >

                        <Card.Body>
                            <Card.Title>{i + 1}. {rank.name}: {rank.points} puntos </Card.Title>
                        </Card.Body>
                    </Card>
                )
            }) : <p className="cargando"> Cargando Ranking . . . </p>}







        </div>
    );
}

export default Ranking;
