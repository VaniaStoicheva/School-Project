import React from "react";
import "./Course.css";
import { Link } from 'react-router-dom';
import requester from "../../services/requester";



  class Course extends React.Component{ 
    constructor(props){
      super(props)
      const isLogged=!!sessionStorage.getItem('authtoken');
      this.state={ 
        isLogged ,
      course:[]
      }
    }
    deletedCourse=()=>{
     requester.remove('appdata','courses','kinvey',this._id)
      .then(console.log('deleted')) 
    }; 

    detailsHandler=()=>{

    };

        
    render(){
        const course=this.props;
       
           return  ( 
             <main>
           <section className="cats">
             <ul>
               <li>
               <img src={course.imgUrl} alt="course-img"/> 
            <h3></h3>
            <p><span>Title: </span>{course.title}</p>
            <p><span>Description: </span>{course.description}</p>
            <ul className="buttons">
              <Link className="btn edit" onClick={this.detailsHandler} to={'/allCourses/details/{id}'} >Details</Link>
              <Link className="btn delete" to={'/allCourses/delete/{id}'} onClick={this.deletedCourse}>Delete</Link> 
            </ul> 
               </li>
             </ul>
           
            </section>
           </main>
           )
      }    
}

export default Course;