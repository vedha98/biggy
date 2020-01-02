import React, { Component } from 'react';
import './Loader.css'
export class Loader extends Component {
    render() {
        return (
            <div className="load-wrapper">
              <div class="loader"></div>
            </div>
        );
    }
}

export default Loader;
