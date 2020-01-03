import React, { Component } from 'react';
import './Loader.css'
export class Loader extends Component {
    render() {
        return (
            <div className="load-wrapper">
              <div className="loader"></div>
            </div>
        );
    }
}

export default Loader;
