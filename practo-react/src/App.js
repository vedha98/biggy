import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,withRouter
} from "react-router-dom";
import './App.css';
import BookAppoint from './Components/BookAppoint/BookAppoint'
import Navbar from './Components/Navbar/Navbar'
import Searchbar from "./Components/Searchbar/Searchbar";
import Doctors from './Components/Doctors/Doctors';
import Loader from './Components/Loader/Loader'
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      page: 0,
      reqpage:0,
      loading:false
    }
  }
  showDoctors = (query, city, location) => {
    this.setState({loading:true})
    this.setState(prevState => {
      return { reqpage: prevState.reqpage + 1 }
    })
    let special = query.suggestion,
      category = query.category
    let URL = `https://www.practo.com/marketplace-api/dweb/search/provider?city=${city}&q=%5B%7B%22word%22%3A%22${encodeURIComponent(special)}%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22${category}%22%7D%2C%7B%22word%22%3A%22${encodeURIComponent(location)}%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22locality%22%7D%5D&page=${this.state.page}`
    axios.get(URL).then(val => {
      console.log(this.state.doctors)
      let docs = this.state.doctors
    
      docs = docs.concat(val.data.doctors)
      let page= this.state.page+1
      this.setState({ doctors:docs ,query:query,city:city,location:location,page:page,loading:false})
    })


  }

  nextpage = () => {
    console.log(this.state.page)
    if(this.state.page===this.state.reqpage){
      this.showDoctors(this.state.query,this.state.city,this.state.location)
    }
    
  }
  getdoctorinfo=(doctorID)=>{
    return this.state.doctors.find({doctor_id:doctorID})
  }
  clearDoctors=()=>{
    this.setState({doctors:[],page:0,reqpage:0})
  }
  render() {
    return (
      <Router>
      <div className="app">
        {this.state.loading?<Loader/>:null}
        <Navbar />
        <Switch>
          <Route path="/bookappoint" component={BookAppoint}/>
          <Route path="/*">
        <Searchbar clearDoctors={this.clearDoctors} showDoctors={this.showDoctors} />
        {this.state.doctors.length>1?<Doctors doctors={this.state.doctors} nextpage={this.nextpage} />:null}
        </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
