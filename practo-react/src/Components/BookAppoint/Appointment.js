import React, { Component } from 'react';
import AppointmentItem from './AppointmentItem';
export class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:props.name,
            address:props.address,
            "doctor name":props.doctor.doctor_name,
            "appointment date":props.date

        }
    }
    
    
    render() {
        return (
            <div className="appointment-details">
                <h3 className="heading">Appointment details</h3>
            {Object.keys(this.state).map((keyname,index)=>< AppointmentItem key={index} keyname={keyname} desc={this.state[keyname]}/>)}
                    
                </div>
        );
    }














    componentWillReceiveProps(props) {
        this.setState({
            name:props.name,
            address:props.address,
            "doctor name":props.doctor.doctor_name,
            "appointment date":props.date

        });  
      }
}

export default Appointment;
