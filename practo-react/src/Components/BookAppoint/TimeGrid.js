import React, { Component } from 'react';

export class TimeGrid extends Component {
    constructor(props) {
        super(props);
        this.state={
            availabletime:[
                '10:00AM',
                '10:30AM',
                '11:00AM',
                '11:30AM',
                '12:00AM',
                '01:00PM',
                '01:30PM',
                '02:00PM',
                '02:30PM',
                '03:30PM',
                '04:00PM',
                '04:30PM',
                '05:00PM',
                '05:30PM',
                '06:00PM'
            ]
        }
    }
    
    render() {
        return (
            <div className="GridWrapper">
            <div className="TimeGrid">
                {this.state.availabletime.map((val,key)=><div onClick={e=>this.props.settime(val)} className={this.props.selectedTime===val?"Time active":"Time"} key={key}>{val}</div>)}
            </div>
            </div>
        );
    }
}

export default TimeGrid;
