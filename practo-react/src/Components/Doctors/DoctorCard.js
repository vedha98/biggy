import React from 'react';

const DoctorCard = ({doctor}) => {

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
            <button className="doc-btn">Book Now</button>
        </div>
    </div>
    );
}

export default DoctorCard;
