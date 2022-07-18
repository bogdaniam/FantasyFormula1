import React , {Component} from "react"
import Login from '../components/Login';
import Navbar from "../components/Navbar"; 

class Logear extends Component{

    render() {
        return (
            <div class="centrado">
                <Navbar />
                <Login/>
            </div>
            );
    }
}
export default Logear
