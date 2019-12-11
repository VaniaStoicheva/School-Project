import React,{Component} from "react";
import "./AddNewKourse.css";

 class AddNewKourse extends Component{
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

     render(){
         return(
            <div>
            <form action="" method="" className="cat-form" enctype="multipart/form-data">
                <h2>Add New Kourse</h2>
                <label htmlFor="name">Title</label>
                <input name="name" type="text" id="title" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <label htmlFor="name">Hours</label>
                <input name="name" type="text" id="hours" />
                <label htmlFor="name">Day Visit</label>
                <input name="name" type="text" id="visit" />
                <label htmlFor="name">Teachers</label>
                <input name="name" type="text" id="teachers" />
                <label htmlFor="img">Image</label>
                <input name="upload" type="file" id="img" />
                <label htmlFor="group">Direction</label>
                <select name="kourse" id="group">
                    <option value="Matematiks">Matematiks</option>
				    <option value="Bulgarian language">Bulgarian language</option>
				    <option value="Programming">Programming</option>
                </select>
                <button type="submit">Add Kourse</button>
            </form>
             </div>
         )
     }
 }
 export default AddNewKourse;