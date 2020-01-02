import React, { Component } from 'react';
import DoctorCard from './DoctorCard'
import  "./Doctor.css";
export class Doctors extends Component {
     isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight+100;
      }
      
      componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
      }
      
     
      
      trackScrolling = () => {
        const wrappedElement = document.getElementById('doctor-result');
        if (this.isBottom(wrappedElement)) {
          this.props.nextpage()
        }
      };
    render() {
        return (
            <div className="doctor-result" id="doctor-result">
                {this.props.doctors.map((val,index)=><DoctorCard key={index} doctor={val}/>)}
            </div>
        );
    }
   
}

export default Doctors;
