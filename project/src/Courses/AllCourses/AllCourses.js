import React from "react";
import Course from "../Course/Course";
import './AllCourses.css';
import requester from "../../services/requester";

 
class AllCourses extends React.Component{
  constructor(props){
    super(props);
    this.state={
      courses:[]
    }
  }
  getPosts=()=>{
    requester.get('appdata','courses','kinvey')
    .then(res=>{
      this.setState({courses:res})
    });
  }

  componentDidMount=()=>this.getPosts();

    render(){
        const {courses}=this.state;
        return(
            <main>
            <section className="cats">
                <ul>
                {this.state.courses ?
                    <li>
                  {this.state.courses.map((course)=>
    <Course  key={course._id} title={course.title} description={course.description}  teacher={course.teacher} imgUrl={course.imgUrl}>{course.description}</Course>)} 
                    </li>
                    : <div>Loading...</div>}
                </ul>
            </section>
            </main>
         )
    }
     
 }
 

 export default AllCourses;