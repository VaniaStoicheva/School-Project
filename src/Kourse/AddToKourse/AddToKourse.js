
import React,{Component} from "react";
import "./AddToKourse.css";

import whitForm from '../../shared/hocs/whitForm';

import * as yup from 'yup';

 class AddToKourse extends React.Component{
    constructor(props){
        super(props);
        this.state=[
            {
               sname:'',
               kours:'',
               terms:false,
               error:null
            }
        ]
    }
    
     studentNameOnChangeHandler = this.props.controlChangeHandlerFactory('sname');
     kourseOnChangeHandler = this.props.controlChangeHandlerFactory('kourse');
     termsOnChangeHandler = this.props.controlChangeHandlerFactory('terms');
     /* handleChange=(e)=>{
         this.setState({
            [e.target.name]:e.target.value
         })     
     } */
    /*  handleSubmit=(e)=>{
         e.preventDefault()
         console.log(this.state);
         const {sname, kourse, terms, error}=this.state;
         if(sname ===''){
            this.setState({
                error:"Student name is required"
            })
         }else{
            this.setState({
                error: null
            })
         }
            
     } */
    
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
        const kourseError=this.getFirstInputErrors('kourse');
        const termsError=this.getFirstInputErrors('terms');

         return(
            
        <form  className="cat-form">
            <h1>Add Student To Course</h1>
            <div>
            <label htmlFor="name">Student name:</label><br/>
            <input name="sname" onChange={this.studentNameOnChangeHandler}  type="text"  />
            {studentNameError &&<div className='error'>{studentNameError}</div>}
            </div>
             <div>
            <label htmlFor="name">Kourse:</label><br />
             <select name="kourse" onChange={this.kourseOnChangeHandler} >
                 <option value="">Choose...</option>
                    <option name="mat" onChange={this.kourseOnChangeHandler} value="Matematiks">Matematiks</option>
				    <option name="bel"onChange={this.kourseOnChangeHandler} value="Bulgarian language">Bulgarian language</option>
				    <option name="programming" onChange={this.kourseOnChangeHandler} value="Programming">Programming</option>
                </select>
                {kourseError &&<div className='error'>{kourseError}</div>}
            </div>   
             <div>
             <label>Terms & Conditions</label>
             
             <input type="checkbox" name="terms" onChange={this.termsOnChangeHandler}  />
             {termsError &&<div className='error'>{termsError}</div>}
             </div>   
            <div>
            <button type="button" onClick={this.submitHandler}>Add To Kourse</button>
            </div>
            </form>
            
         )
        }
 }
 const schema=yup.object({
    sname: yup.string('Student name shuld be a string')
    .required('Student name is required')
    .min(4,'Student name must be more than 4 chars'),
    kourse: yup.string().required('Selected kourse is required'),
    terms: yup.string().required('Terms & Conditions is required') 
      
      
  });
 const initialState=
  {
    sname:'',
    kourse:'',
    terms:false,
    error:null
 };
 export default whitForm(AddToKourse, initialState, schema);