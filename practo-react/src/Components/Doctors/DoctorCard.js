import React from 'react';
import {useHistory,withRouter} from 'react-router-dom';
import BookAppoint from '../BookAppoint/BookAppoint';
const DoctorCard = (props) => {
   
    const bookclick=()=>{
       props.history.push('/BookAppoint',{doctor:props.doctor})
    }
    let doctor= props.doctor;
    return (
       
        <div className="doctor-card">
        <div className="docphoto">
            <img alt='doctor image' src={doctor.profile_photo.url?doctor.profile_photo.url:window.location.origin + '/docalt.jpg'}></img>
        </div>
        <div className="docdetails">
            <h3>{doctor.doctor_name}</h3>
            <p>{doctor.specialties[0].specialty}</p>
                <p>{doctor.experience_years} of experience overall</p>
                <p><strong>{doctor.locality}</strong> . {doctor.practice.city}</p>
                <p>₹ {doctor.amount} at the clinic</p>
        </div>
        <div className="docactions">
            <button className="doc-btn button" onClick={bookclick}>Book Now</button>
        </div>
    </div>
    );
}

export default withRouter(DoctorCard);
