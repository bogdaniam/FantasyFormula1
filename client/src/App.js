// //import React, { useState } from "react";
// import "./App.css";
// import Login from './components/Login';
// import Registro from './components/Registro';
// import Verpilotos from './components/Verpilotos';
// import Navbar from './components/Navbar';
// const App = () => {


// //<Login/>
// //<Registro/>
// //Verpilotos
//   return (
//     <div className="flex">
//      <Navbar/>
//       <Verpilotos/>

//     </div>
//   );
// };

// export default App;


import React, { Component } from "react";
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css"
import "./components/Verpilotos.css"

class App extends Component {


render() {
    return (
        <BrowserRouter>
            <div class="mainapp">
                <div class="navb">
                <Navbar />
               
                </div>
                <div><MainComponent /></div>
                
                
            </div>
        </BrowserRouter>
    );
}º
}
export default App;

