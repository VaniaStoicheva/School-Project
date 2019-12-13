import React,{Component} from "react";
import "./AddNewCourse.css";
import whitForm from '../../shared/hocs/whitForm';
import courseService from '../../services/CourseService';
import * as yup from 'yup';

 class AddNewcourse extends React.Component{
     constructor(props){
         super(props);
         /* this.state=[
             {
                title:'',
                description:'',
                hors:'',
                visit:'',
                teachers:'',
                img:''
             }
         ] */
     }
     titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
     descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');
     hoursOnChangeHandler = this.props.controlChangeHandlerFactory('hours');
     visitOnChangeHandler = this.props.controlChangeHandlerFactory('visit');
     teachersOnChangeHandler = this.props.controlChangeHandlerFactory('teachers');

     submitHandler=()=>{
        this.props.runValidation()
        .then(formData=>console.log(formData));
        const data=this.props.getFormState();
        console.log(data);
        courseService.create(data).then(()=>{
            console.log('successs')
            this.props.history.push('/');
        })
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
                <h1>Add New Course</h1>
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
                <select name="course" id="group">
                    <option value="Matematiks">Matematiks</option>
				    <option value="Bulgarian language">Bulgarian language</option>
				    <option value="Programming">Programming</option>
                </select>
                
                <button type="button" onClick={this.submitHandler}>Add New Course</button>
            </form>
             </div>
         )
     }
 }
 const schema=yup.object({
    title: yup.string('Title course shuld be a string')
    .required('Title course name is required')
    .min(4,'Title course must be more than 4 chars'),
    description: yup.string().required('Description is required'),
    hours: yup.string().required('Hourse is required'), 
    visit: yup.string().required('Visit day is required'),
    techers: yup.string().required('Teachers name is required'),  
      
      
  });
 const initialState=
  {
    
        title:'',
        description:'',
        hours:'',
        visit:'',
        teachers:'',
        img:''
     
 };
 export default whitForm(AddNewcourse,initialState, schema);