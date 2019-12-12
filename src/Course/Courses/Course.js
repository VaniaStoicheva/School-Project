import React from "react";
import "./Course.css";
import kourseService from "../../services/CourseService";




  class Course extends React.Component{ 
    constructor(props){
        super(props)
    }
    state={
        kourse:null
    }
        
    render(){
        const kourse=this.props;
           return  (
            
           <li>
            <img src={this.props.kourse.img} />
            <h3></h3>
            <p><span>Title: </span>{this.props.kourse.title}</p>
            <p><span>Description: </span>{this.props.kourse.description}</p>
            <p><span>Hours: </span>{this.props.kourse.hours}</p>
            <p><span>Day Visit: </span>{this.props.kourse.dayVisit}</p>
            <p><span>Theachers: </span>{this.props.kourse.theachers}</p>
              <ul class="buttons">
                 <li className="btn edit"><a href="">Edit Info</a></li>
                <li className="btn delete"><a href="">Delete</a></li> 
            </ul>  
            </li>
            
           )
             }
        
            
    
}
      

export default Course;