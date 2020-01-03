import React, { Component } from 'react';
import './Searchbar.css'
import axios from 'axios'
export class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state={
            city:"Coimbatore",
            page:0,
            citysuggestions:[],
            specsuggestions:[],
            visibility:{
                location:false
            },
            query:{
                suggestion:"Doctor",
                category:'type',
            }

        }
        
    }
    componentDidMount(){
      this.fetchSuggestions()  
      this.fetchSpecials()
    }
    fetchSuggestions=()=>{
       axios.get(`https://www.practo.com/health/api/top/omni/suggestion.json?city=${this.state.city}&locale=en-en&query_type=locality`).then(val=>{this.setState({citysuggestions:val.data.results.default.matches})})
    }
    fetchSpecials=()=>{
        axios.get(`https://www.practo.com/health/api/top/omni/suggestion.json?city=${this.state.city}&locale=en-en&query_type=keyword`).then(val=>{this.setState({specsuggestions:val.data.results.default.matches})})
     }
    handleLocchange=()=>e=>{
        this.setState({"input_location":e.target.value})
        this.filtersuggestions(e.target.value)
    }
    handleSpecchange=()=>e=>{
        this.setState({"input_special":e.target.value})
        this.filterspecialities(e.target.value)
    }
    filtersuggestions=(input)=>{
        axios.get(`https://www.practo.com/client-api/v1/cerebro/v3/autocomplete?query=${input}&indexes=%5B%22city%22%2C%22locality%22%5D`).then(val=>{
            this.setState({citysuggestions:val.data.results.default.matches})
        }
            
        )
    }

    filterspecialities=(input)=>{
        axios.get(`https://www.practo.com/cerebro/v3/autocomplete?query=${input}`).then(val=>{
            this.setState({specsuggestions:val.data.results.default.matches})
        }
            
        )
    }
    
    handleLocClick=(loc)=>{
        if(loc.city){
            this.setState({city:loc.city,loc:loc.suggestion})
        }else{
            this.setState({city:loc.suggestion,loc:null})
        }
        this.setState({input_location:loc.suggestion})
        this.hide('location')
        this.fetchSpecials();
    }
    handleSpecClick=(val)=>{
        this.setState({input_special:val.suggestion})
        this.setState({query:val})
        this.hide('speciality')
        

    }
    searchDoctors=(e)=>{
        e.preventDefault()
        this.hideall()
        let location;
        if(this.state.loc){
            location=this.state.loc
        }else{
            location=this.state.city
        }
        this.setState({input_special:this.state.query.suggestion,input_location:location})
        this.props.clearDoctors()
        this.props.showDoctors(this.state.query,this.state.city,this.state.location)
    }
    show=(value)=>{
        var visibility = {}
        visibility[value]=true
        this.setState({visibility})
    }
    hide=(value)=>{
        var visibility = this.state.visibility
        visibility[value]=false
        this.setState({visibility})
    }
    hideall=()=>{
        this.setState({visibility:{}})
    }
    
    render() {
        return (
            <div className="input-group">
                <form>
                    <div className="input-wrapper" onFocus={e=>this.show("location")} >
                    <input type="text" name="name" placeholder="location"  value={this.state.input_location}  onChange={this.handleLocchange()}/>
                   {this.state.visibility.location?<ul className="doc-ul">
                    { this.state.citysuggestions.map((val,key)=><li onClick={e=>this.handleLocClick(val)} key={key}>{val.suggestion}</li>)}
                    </ul>:null}
                    </div>
                    <div className="input-wrapper" onFocus={e=>this.show("speciality")}>
                    <input type="text" name="name" placeholder="speciality" value={this.state.input_special}  onChange={this.handleSpecchange()} />
                    {this.state.visibility.speciality?<ul className="doc-ul">
                    { this.state.specsuggestions.map((val,key)=><li onClick={e=>this.handleSpecClick(val)} key={key}>{val.suggestion}</li>)}
                    </ul>:null}
                    </div>
                    <button className="button" onClick={this.searchDoctors}>search</button>
                </form>
            </div>
        );
    }
    

}



export default Searchbar;
