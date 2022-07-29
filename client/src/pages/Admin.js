import React , {Component} from "react"
import Admin from '../components/Admin';
import Navbar from "../components/Navbar"; 


class Administrador extends Component{

    render() {
        return (
            
            <div>
                <Navbar />
                <Admin/>
            </div>

            );
    }
}
export default Administrador