import React from 'react';
import './Navbar.css'

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
                        <img className="logo" src={window.location.origin + '/practo.svg'}></img>
                    </div>
                    <div className="nav-item main-nav">
                        <div className="main-nav-item">
                            <h4>Doctors</h4>
                            <p>Book an Appoinment</p>
                        </div>
                        <div className="main-nav-item">
                            <h4>Chat</h4>
                            <p>Chat With Top Doctors</p>
                        </div>
                        <div className="main-nav-item">
                            <h4>Pharmacy</h4>
                            <p>Medicines & health products</p>
                        </div>
                        <div className="main-nav-item">
                            <h4>Diagnostics</h4>
                            <p>Book Tests & Checkup</p>
                        </div>
                    </div>
                    <div className="nav-item right-drop">
                        <div class="dropdown">For Providers</div>
                        <div class="dropdown">Security</div>
                        
                        <button className="nav-btn">Login/Signup</button>
                    
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Navbar;