import React , {Component} from "react"
import Profile from "../components/Profile"; 
import Navbar from "../components/Navbar"; 

class Perfil extends Component{

    render() {
        return (
            <div>
                <Navbar />
                <Profile/>
            </div>
            );
    }
}
export default Perfil