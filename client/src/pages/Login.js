import React , {Component} from "react"
import Login from '../components/Login';
import Navbar from "../components/Navbar"; 

class Logear extends Component{

    render() {
        return (
            <div>
                <Navbar />
                <Login/>
            </div>
            );
    }
}
export default Logear
