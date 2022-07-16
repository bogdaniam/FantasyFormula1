
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Navbar = (props) => {

    const [logeado, setLogeado] = useState(localStorage.getItem("user"))

    const sendDesconectar = () => {
        localStorage.clear()
        window.location.assign("/");

    };

    return (
        <div className="headerNav" class="headerNav">

            <div class="navbar-sing">


                {logeado == null ? <button className="buttonHome"><Link to={"/login"} className="buttonHome">Log in</Link></button> : ""}

                {logeado == null ? <button className="buttonHome"><Link to={"/registro"} className="buttonHome">Registro</Link></button> : ""}



                {logeado != null ? <button className="buttonHome"><Link to={"/verpilotos"} className="buttonHome">Pilotos</Link></button> : ""}

                <button className="buttonHome"><Link to={"/ranking"} className="buttonHome">Ranking</Link></button>

                <button className="buttonHome"><Link to={"/admin"} className="buttonHome">Admin</Link></button>

                {logeado != null ? <button className="buttonHome"><Link to={"/profile"} className="buttonHome">Profile</Link></button> : ""}

                {logeado != null ? <button className="buttonHome" onClick={() => sendDesconectar()}>desconectar</button> : ""}


            </div>



        </div>
    )
}
export default Navbar;