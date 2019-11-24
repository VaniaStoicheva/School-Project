import React from 'react';
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import HomePage from "./HomePage/HomePage";
import "./HomePage/HomePage.css";



class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const {kourse}=this.props
    return (
      <div className="App">
          <Navigation />
          <Search />
         <HomePage />
      </div>
    );
  }
  }
 

export default App;
