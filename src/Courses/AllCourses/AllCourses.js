import React from "react";
import Course from "../Course/Course";
import data  from '../../data';

import courseService from "../../services/CourseService";

 
class AllCourses extends React.Component{
    constructor(props){
        super(props)
    }
 
state={
  courses:null
};

componentDidMount(){
  courseService.load().then(courses=>{
      this.setState({courses})
  })
}
    render(){
        const {course}=this.props;
        return(
            <main>
            <section class="cats">
                <ul>
                    <li>
                   
   
                     <Course course={data[0]}/> 
                    </li>
                </ul>
            </section>
            </main>
         )
    }
     
 }
 export default AllCourses;