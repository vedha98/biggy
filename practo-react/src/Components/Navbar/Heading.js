import React from 'react';

const Heading = (props) => {
    return (
        <div className="main-nav-item">
<h4>{props.head}</h4>
    <p>{props.desc}</p>
        </div>
    );
}

export default Heading;

