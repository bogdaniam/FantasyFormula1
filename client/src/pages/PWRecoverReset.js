import React, { Component } from "react";
import PWRecoveryReset from '../components/PWRecoveryReset';
import Navbar from "../components/Navbar"; 

class PWRecoverReset extends Component {

    render() {
        return <div class="centrado">
            <Navbar />
            <PWRecoveryReset />
        </div>;
    }
}
export default PWRecoverReset;