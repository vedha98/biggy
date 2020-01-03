import React, { Component } from 'react';

export class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:props.name,
            address:props.address,
            doctor:props.doctor.doctor_name

        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            name:props.name,
            address:props.address,
            doctor:props.doctor.doctor_name

        });  
      }
    
    render() {
        return (
            <div className="appointment-details">
                <h3 className="heading">Appointment details</h3>
            {Object.keys(this.state).map((keyname,index)=><div key={index} className="appointment-item">
                        <div className="appointment-header">{keyname}:</div>
                        <div className="appointment-desc">{this.state[keyname]}</div>
                    </div>)}
                    
                </div>
        );
    }
}

export default Appointment;
