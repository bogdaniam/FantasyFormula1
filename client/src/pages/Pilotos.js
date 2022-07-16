import React, { Component } from "react";
import Verpilotos from '../components/Verpilotos';
import Navbar from "../components/Navbar"; 

class Pilotos extends Component {


    render() {
        return <div>
            <Navbar />
            <Verpilotos/>
        </div>;
    }
}
export default Pilotos;