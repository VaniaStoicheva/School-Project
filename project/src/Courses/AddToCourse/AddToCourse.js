
import React from "react";
import "./AddToCourse.css";

import whitForm from '../../shared/hocs/whitForm';

import * as yup from 'yup';

 class AddTocourse extends React.Component{
    constructor(props){
        super(props);
        this.state=[
            {
               sname:'',
               course:'',
               terms:false,
               error:null
            }
        ]
    }
    
     studentNameOnChangeHandler = this.props.controlChangeHandlerFactory('sname');
     courseOnChangeHandler = this.props.controlChangeHandlerFactory('course');
     termsOnChangeHandler = this.props.controlChangeHandlerFactory('terms');
     
    
     submitHandler=()=>{
        
        this.props.runValidation()
        .then(formData=>console.log(formData))
      };

      getFirstInputErrors=name=>{
        const errorState=this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
      };
     render(){
       
        const studentNameError=this.getFirstInputErrors('sname');
        const courseError=this.getFirstInputErrors('course');
        const termsError=this.getFirstInputErrors('terms');

         return(
            
        <form  className="cat-form">
            <h1>Add Student To Course</h1>
            <div>
            <label htmlFor="name">Student name:</label><br/>
            <input className="myInput" name="sname" onChange={this.studentNameOnChangeHandler}  type="text"  />
            {studentNameError &&<div className='error'>{studentNameError}</div>}
            </div>
             <div>
            <label htmlFor="name">Choose Course:</label><br />
            <select className="myInput" name="course" onChange={this.courseOnChangeHandler} type="select">
               <option value="">Choose...</option>
               <option name="mat" onChange={this.courseOnChangeHandler} value="Matematiks">Matematiks</option>
				   <option name="bel"onChange={this.courseOnChangeHandler} value="Bulgarian language">Bulgarian language</option>
				   <option name="programming" onChange={this.courseOnChangeHandler} value="Programming">Programming</option>
               </select>
                {courseError &&<div className='error'>{courseError}</div>}
            </div>   
             <div>
             <span>Terms & Conditions</span>
             <input className="myInput" type="checkbox" name="terms" onChange={this.termsOnChangeHandler} />
             
             {termsError &&<div className='error'>{termsError}</div>}
             </div>   
            <div>
            <button type="button" onClick={this.submitHandler}>Add To Course</button>
            </div>
            </form>
            
         )
        }
 }
 const schema=yup.object({
    sname: yup.string('Student name shuld be a string')
    .required('Student name is required')
    .min(4,'Student name must be more than 4 chars'),
    course: yup.string().required('Selected course is required'),
    terms: yup.string().required('Terms & Conditions is required') 
      
      
  });
 const initialState=
  {
    sname:'',
    course:'',
    terms:false,
    error:null
 };
 export default whitForm(AddTocourse, initialState, schema);