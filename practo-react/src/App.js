import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import  Searchbar  from "./Components/Searchbar/Searchbar";



export class App extends Component {
  showDoctors=(docs)=>{
    console.log(docs)
  }
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Searchbar showDoctors={this.showDoctors} />

      </div>
    );
  }
}

export default App;
