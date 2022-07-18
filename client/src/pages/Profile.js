import React , {Component} from "react"
import Profile from "../components/Profile"; 
import Navbar from "../components/Navbar"; 

class Perfil extends Component{

    render() {
        return (
            <div class="centrado">
                <Navbar />
                <Profile/>
            </div>
            );
    }
}
export default Perfil