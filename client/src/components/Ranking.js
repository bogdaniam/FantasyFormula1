import React, { useEffect, useState } from 'react'
//import './Verpilotos.css';
import { Card } from 'react-bootstrap'


function Ranking() {

    const [ranking, setRanking] = useState("");
    useEffect(() => {

        fetch("ranKing")
            .then((res) => res.json())
            .then(res => { console.log(res); setRanking(res) })

    }, [])

    return (
        <div className="flex" class="divpilotos">


            {(() => {

                for (let key in ranking) {
                    return (
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>{key} {ranking[`${key}`]} puntos</Card.Title>
                               
                            </Card.Body>
                        </Card>
                    )
                }

            })()}






        </div>
    );
}

export default Ranking;
