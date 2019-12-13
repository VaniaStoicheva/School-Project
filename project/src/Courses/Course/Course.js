import React from "react";
import "./Course.css";


  class Course extends React.Component{ 
    
    state={
        course:null
    }
        
    render(){
        const course=this.props;
           return  ( 
           <li>
             <img src='/logo2.png' alt="course-img"/> 
            <h3></h3>
            <p><span>Title: </span>{course.title}</p>
            <p><span>Description: </span>{course.description}</p>
            {/* <p><span>Hours: </span>{course.hours}</p>
            <p><span>Day Visit: </span>{course.dayVisit}</p> */}
            {/* <p><span>Theachers: </span>{course.teacher}</p> */}
              <ul class="buttons">
                 <li className="btn edit"><a href="">Details</a></li>
                <li className="btn delete"><a href="">Delete</a></li>   
            </ul>  
            </li>
           
           )
      }    
}

export default Course;