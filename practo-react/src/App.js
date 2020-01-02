import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import  Searchbar  from "./Components/Searchbar/Searchbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
    </div>
  );
}

export default App;
