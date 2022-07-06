import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Pilotos from "../pages/Pilotos";
import Login from "../pages/Login";
import Clasificacion from "../pages/Ranking";
import Registro from "../pages/Registro";

class Main extends Component {


    render() {
        return (
        <div>
            <Routes>
                <Route path="/verpilotos" element={<Pilotos />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ranking" element={<Clasificacion />} />
            </Routes>
        </div>
        );
    }
}
export default Main;
