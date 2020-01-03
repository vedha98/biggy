import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import TimeGrid from './TimeGrid'
import Calendar from 'react-calendar'
import Appointment from './Appointment'
import 'react-calendar/dist/Calendar.css';
import './BookAppoint.css'
export class BookAppoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: '',
            selectedTime: new Date(),
            show: false
        }
        if (props.location.state) {
            this.state = {

                doctor: this.props.location.state.doctor,

            }
        } else {
            this.props.history.push('/')

        }


    }
    selectTime = (date) => {
        this.setState({ selectedTime: date })
        console.log(date)
    }
    handleChange = (name) => e => {
        this.setState({ [name]: e.target.value })
    }
    handleSubmit = (e) => {

        this.setState({ show: true })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.doctor) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <div>
                <form className="form">
                    <input className="input" placeholder="name" onChange={this.handleChange('name')}></input>
                    <input className="input" placeholder="address" onChange={this.handleChange('address')}></input>
                </form>
                <div className="calender-wrap">
                    <Calendar value={this.state.selectedTime} onChange={this.selectTime} />
                </div>
                <div className="btn-wrap">
                    <button onClick={this.handleSubmit} className="button submit">Submit</button>
                </div>
                {this.state.show?<Appointment doctor={this.state.doctor} name ={this.state.name} address={this.state.address}/>:null}
            </div>
        );
    }
}

export default withRouter(BookAppoint);
