import React,{Component} from "react";
import "./AddNewKourse.css";
import whitForm from '../../shared/hocs/whitForm';

import * as yup from 'yup';

 class AddNewKourse extends React.Component{
     constructor(props){
         super(props);
         this.state=[
             {
                title:'',
                description:"",
                hors:'',
                visit:'',
                teachers:'',
                img:''
             }
         ]
     }
     titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
     descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');
     hoursOnChangeHandler = this.props.controlChangeHandlerFactory('hours');
     visitOnChangeHandler = this.props.controlChangeHandlerFactory('visit');
     teachersOnChangeHandler = this.props.controlChangeHandlerFactory('teachers');

     submitHandler=()=>{
        this.props.runValidation()
        .then(formData=>console.log(formData))
      };

      getFirstInputErrors=name=>{
        const errorState=this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
      }
     render(){
        const titleError=this.getFirstInputErrors('title');
        const descriptionError=this.getFirstInputErrors('description');
        const hoursError=this.getFirstInputErrors('hours');
        const visitError=this.getFirstInputErrors('visit');
        const teachersError=this.getFirstInputErrors('teachers');
         return(
            <div>
            <form  className="cat-form" >
                <h2>Add New Kourse</h2>
                <label htmlFor="name">Title</label>
                <input name="title" type="text" onChange={this.titleOnChangeHandler} />
                {titleError &&<div className='error'>{titleError}</div>}

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"  onChange={this.descriptionOnChangeHandler} ></textarea>
                {descriptionError &&<div className='error'>{descriptionError}</div>}
                
                <label htmlFor="name">Hours</label>
                <input name="hours" type="text" id="hours"  onChange={this.hoursOnChangeHandler} />
                {hoursError &&<div className='error'>{hoursError}</div>}
                
                <label htmlFor="name">Day Visit</label>
                <input name="visit" type="text" id="visit"  onChange={this.visitOnChangeHandler} />
                {visitError &&<div className='error'>{visitError}</div>}
                
                <label htmlFor="name">Teachers</label>
                <input name="thechers" type="text" id="teachers"  onChange={this.teachersOnChangeHandler} />
                {teachersError &&<div className='error'>{teachersError}</div>}
                
                <label htmlFor="img">Image</label>
                <input name="upload" type="file" id="img" />
               
                <label htmlFor="group">Direction</label>
                <select name="kourse" id="group">
                    <option value="Matematiks">Matematiks</option>
				    <option value="Bulgarian language">Bulgarian language</option>
				    <option value="Programming">Programming</option>
                </select>
                
                <button type="button" onClick={this.submitHandler}>Add Kourse</button>
            </form>
             </div>
         )
     }
 }
 const schema=yup.object({
    title: yup.string('Title kourse shuld be a string')
    .required('Title kourse name is required')
    .min(4,'Title kourse must be more than 4 chars'),
    description: yup.string().required('Description is required'),
    hours: yup.string().required('Hourse is required'), 
    visit: yup.string().required('Visit day is required'),
    techers: yup.string().required('Teachers name is required'),  
      
      
  });
 const initialState=
  {
    
        title:'',
        description:"",
        hours:'',
        visit:'',
        teachers:'',
        img:''
     
 };
 export default whitForm(AddNewKourse,initialState, schema);