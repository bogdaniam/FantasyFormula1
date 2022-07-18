import React, { Component } from "react";
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css"

//import imagenbackground from "../public/img/background"
import botonContext from "./context/botonContext";


class App extends Component {


render() {
    return (
        <botonContext.Provider value="Actualizar la base de datos">
        <BrowserRouter>
         
            <div  class="mainapp" >
                <div class="navb">
                
               
                </div>
                <div><MainComponent /></div>
                
                
            </div>
            
        </BrowserRouter>
        </botonContext.Provider>
    );
}
}
export default App;

