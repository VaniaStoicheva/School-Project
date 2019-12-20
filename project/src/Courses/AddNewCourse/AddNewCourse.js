import React from "react";
import "./AddNewCourse.css";
import requester from "../../services/requester";

 class AddNewcourse extends React.Component{
     constructor(props){
         super(props);
         this.state={ 
            title:'',
            description:'',
            visit:'',
            imgUrl:'',
            teachers:''
         
            
         }
     }

     handleChange=e=>{
        let fielddName=e.target.name;
        let fieldValue=e.target.value;
        this.setState({[fielddName]:fieldValue});
        }
        handleSubmit = e =>{
          e.preventDefault();
          requester.post ('appdata','courses','kinvey',this.state)
          .then(res=>{
            console.log('Success add new course!');
            this.props.history.push('/allCourses');
           } ); 
        }
   
     render(){
       
         return(
            <div>
            <form  className="cat-form" >
                <h1>Add New Course</h1>
                <label htmlFor="name">Title</label>
                <input name="title" type="text" onChange={this.handleChange} />
                

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"  onChange={this.handleChange} ></textarea>
               
                
                <label htmlFor="name">Hours</label>
                <input name="hours" type="text" id="hours"  onChange={this.handleChange} />
               
                
                <label htmlFor="name">Day Visit</label>
                <input name="visit" type="text" id="visit"  onChange={this.handleChange} />
               
                
                <label htmlFor="name">Teachers</label>
                <input name="thechers" type="text" id="teachers"  onChange={this.handleChange} />
               
                
                <label htmlFor="img">Image</label>
                <input name="imgUrl"  id="img" onChange={this.handleChange}/>
               
                
                <button type="submit" onClick={this.handleSubmit}>Add New Course</button>
            </form>
             </div>
         )
     }
 
    }
 
 export default AddNewcourse;