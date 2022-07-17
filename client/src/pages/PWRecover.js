import React, { Component } from "react";
import PWRecovery from '../components/PWRecovery';
import Navbar from "../components/Navbar"; 

class PWRecover extends Component {

    render() {
        return <div>
            <Navbar />
            <PWRecovery />
        </div>;
    }
}
export default PWRecover;