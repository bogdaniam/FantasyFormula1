import React , {Component} from "react"
import Registro from '../components/Registro';
import Navbar from "../components/Navbar"; 
class Registrar extends Component{

    render() {
        return (
            <div class="centrado">
                <Navbar pagina3="verificacion"/>
                <Registro/>
            </div>
            );
    }
}
export default Registrar