import React from 'react';
import "./Navigation.css";
import  {BrowserRouter, Route, Switch, withRouter, NavLink} from 'react-router-dom';
import AddKourse from "../AddKourse/AddKourse";

const Navigation=()=>{
    return(
    
        <nav>
            <ul class="navigation">
                <li><a href="">Home Page</a></li>
                <li><a href="">Add Student</a></li>
                <li><a href="">Kourses</a></li>
                <BrowserRouter>
                <li><Route path="/addKourse" render={()=><AddKourse /> } /></li> 
                </BrowserRouter>
               
            
            
            </ul>
        </nav>
        
        
    )
}
export default Navigation;