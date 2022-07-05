import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Pilotos from "../pages/Pilotos";
import About from "../pages/About";
import Clasificacion from "../pages/Ranking";
class Main extends Component {


    render() {
        return (
        <div>
            <Routes>
                <Route path="/verpilotos" element={<Pilotos />} />
                <Route path="/about" element={<About />} />
                <Route path="/ranking" element={<Clasificacion />} />
            </Routes>
        </div>
        );
    }
}
export default Main;
