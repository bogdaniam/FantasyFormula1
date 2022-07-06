import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
const Navbar = () => {
    return (
        <div className="headerNav" class="headerNav">
            
                <div class="navbar-sing"> 
        
                <button className="buttonHome"><Link to={"/login"} className="buttonHome">Log in</Link></button>
                    <button className="buttonHome"><Link to={"/registro"}className="buttonHome">Registro</Link></button>
                    <button className="buttonHome"><Link to={"/verpilotos"} className="buttonHome">Pilotos</Link></button>
                    <button className="buttonHome"><Link to={"/ranking"}className="buttonHome">Ranking</Link></button>
                </div>
                
           
        
        </div>
    )
    }
    export default Navbar;