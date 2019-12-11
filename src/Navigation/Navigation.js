import React from 'react';
import "./Navigation.css";
import Link from "../shared/Link/Link";


/* const Navigation=()=>{
    return(
    
        <nav>
            <ul class="navigation">
           
    
      <Link to="/">
        <img id="logo" src="/logo192.png" alt="my-app-logo" />
      </Link>
      <Link to="/">Posts</Link>
      <Link to="/create-posts">New Post</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    
  
                <li><a href="">Home/За нас</a></li>
                <li><a href="">Kourses/Курсове</a></li>
                <li><a href="">Add Student</a></li>
                
                
            
            
            </ul>
        </nav>
        
        
    )
} */
function Navigation() {
    return <nav className="navigation">
      <ul>
        <Link to="/">
          <img id="logo" src="/logo.svg" alt="my-app-logo" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/allKourses">Kourses</Link>
        <Link to="/addNewKourse">AddNewKourse</Link>
        <Link to="/addToKourse">AddToKourse</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>;
  };
export default Navigation;