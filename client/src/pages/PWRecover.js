import React, { Component } from "react";
import PWRecovery from '../components/PWRecovery';
import Navbar from "../components/Navbar"; 

class PWRecover extends Component {

    render() {
        return <div class="centrado">
            <Navbar />
            <PWRecovery />
        </div>;
    }
}
export default PWRecover;