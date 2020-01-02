import React from 'react';
import './Navbar.css'
import Heading from './Heading'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="nav-wrapper">
                    <div className="nav-item img-wrapper">
                        <img className="logo" alt="logo" src={window.location.origin + '/practo.svg'}></img>
                    </div>
                    <div className="nav-item main-nav">
                        <Heading head="Doctors" desc="Book an Appointment"/>
                        <Heading head="Chat" desc="Chat With Top Doctors"/>
                        <Heading head="Pharmacy" desc="Medicines & health products"/>
                        <Heading head="Diagnostics" desc="Book Tests & Checkup"/>
                    </div>
                    <div className="nav-item right-drop">
                        <div className="dropdown">For Providers</div>
                        <div className="dropdown">Security</div>
                        
                        <button className="nav-btn">Login/Signup</button>
                    
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Navbar;