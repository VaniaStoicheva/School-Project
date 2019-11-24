import React,{Component} from "react";
import "./AddKourse.css";

 class AddKourse extends Component{
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
            <form action="" method="" class="cat-form" enctype="multipart/form-data">
                <h2>Add Kourse</h2>
                <label for="name">Title</label>
                <input name="name" type="text" id="title" />
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <label for="name">Hours</label>
                <input name="name" type="text" id="hours" />
                <label for="name">Day Visit</label>
                <input name="name" type="text" id="visit" />
                <label for="name">Teachers</label>
                <input name="name" type="text" id="teachers" />
                <label for="img">Image</label>
                <input name="upload" type="file" id="img" />
                <label for="group">Direction</label>
                <select name="breed" id="group">
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
 export default AddKourse;