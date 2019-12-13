import React from "react";
import Course from "../Course/Course";

import PropTypes from 'prop-types';

import courseService from "../../services/CourseService";

 
class AllCourses extends React.Component{
   state={
    courses:null
    };
  textInput=null;

componentDidMount(){
  courseService.load(null, this.props.limit).then(courses=>{
      this.setState({courses})
  })
}
inputChangeHandler = (e) => {
    console.log(e.target.value);
  }
    render(){
        const {courses}=this.state;
        return(
            <main>
            <section class="cats">
                <ul>
                {courses ?
                    <li>
                  {courses.map((course)=>
    <Course limit={3} key={course._id} title={course.title} description={course.description}  teacher={course.teacher}>{course.description}</Course>)} 
                    </li>
                    : <div>Loading...</div>}
                </ul>
            </section>
            </main>
         )
    }
     
 }
 AllCourses.propTypes = {
  limit: PropTypes.number
}

 export default AllCourses;