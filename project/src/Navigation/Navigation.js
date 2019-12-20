import React from 'react';
import "./Navigation.css";
import Link from "../shared/Link/Link";
import observer from '../services/observer';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state={
       username:null,
    }
    observer.subscribe(observer.events.loginUser, this.userLoggedIn)
  }
  userLoggedIn=username=>{
    this.setState({username})
  }
  render(){
    const loggedInSection=
      <div>
      <span id="helloUser">Hello, {this.state.username}</span>
      </div>
    return <nav className="navigation">  
    <ul>
    <Link to="/">
      <img  src="logod.bmp" alt="my-app-logo" />
      

    </Link>
      <Link to="/">Home</Link>
      <Link to="/allCourses">All Courses</Link>
    
      
      <Link to="/addNewCourse">Add New Course</Link>
      {/* {isLogged && <Link to="/addToCourse">Add Student To Course</Link>} */}
       <Link to="/createPost">Create Post</Link>
       <Link to="/posts">All Posts</Link>
      <Link to="/register">Register</Link>
       <Link to="/login">Login</Link>
       {this.state.username ? loggedInSection : null }
       <Link to="/logout">Logout</Link>
    </ul>
  </nav>;
 
};
  }
   
export default Navigation;