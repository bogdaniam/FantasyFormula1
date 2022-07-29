import React, { Component } from "react";
import Ranking from '../components/Ranking';
import Navbar from "../components/Navbar"; 

class Clasificacion extends Component {

    render() {
        return <div>
            <Navbar />
            <Ranking/>
        </div>;
    }
}
export default Clasificacion;