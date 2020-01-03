import React from 'react';

const AppointmentItem = ({keyname,desc}) => {
    return (
        <div  className="appointment-item">
                        <div className="appointment-header">{keyname}:</div>
                        <div className="appointment-desc">{desc}</div>
                    </div>
    );
}

export default AppointmentItem;
