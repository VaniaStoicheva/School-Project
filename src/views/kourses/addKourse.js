import React from "react";
 class AddKourse extends React.Component{
     constructor(props){
         super(props);
         this.state=[]
     }

     render(){
         return(
            <div>
            <form action="" method="" class="cat-form" enctype="multipart/form-data">
                <h2>Add Kourse</h2>
                <label for="name">Name</label>
                <input name="name" type="text" id="name" />
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <label for="image">Image</label>
                <input name="upload" type="file" id="image" />
                <label for="group">Breed</label>
                <select name="breed" id="group">
                    <option value="Fluffy Cat">Fluffy Cat</option>
				    <option value="Fluffy Cat">Fluffy Cat</option>
				    <option value="Fluffy Cat">Fluffy Cat</option>
                </select>
                <button type="submit">Add Cat</button>
            </form>
             </div>
         )
     }
 }
 export default AddKourse;