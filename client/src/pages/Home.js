import React , {Component} from "react"
import Navbar from "../components/Navbar"; 
import Home  from "../components/Home"; 

class LandingPage extends Component{

    render() {
        return (
            <div>
                <Navbar />
                <Home />
            </div>
            );
    }
}
export default LandingPage