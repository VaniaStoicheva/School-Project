
import React,{Component} from "react";
import "./AddToKourse.css";

 class AddToKourse extends Component{
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
     handleChange=(e)=>{
         this.setState({
            [e.target.name]:e.target.value
         })     
     }
     handleSubmit=(e)=>{
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
            
     }
    
     render(){
        const {sname, kourse, terms, error}=this.state;

         return(
            
        <form onSubmit={this.handleSubmit} action="" method="" className="cat-form">
            <h1>Add Student To Course</h1>
            <div>
            <label htmlFor="name">Student name:</label>
            <input name="sname" onChange={this.handleChange}  type="text" value={sname} id="sname" />
            </div>
             <div>
            <label htmlFor="name">Kourse:</label>
             <select name="kourse" onChange={this.handleChange} value={kourse}>
                 <option value="">Choose...</option>
                    <option name="mat" onChange={this.handleChange} value="Matematiks">Matematiks</option>
				    <option name="bel"onChange={this.handleChange} value="Bulgarian language">Bulgarian language</option>
				    <option name="programming" onChange={this.handleChange} value="Programming">Programming</option>
                </select>
            </div>   
             <div>
             <label>Terms & Conditions</label>
             <input type="checkbox" name="terms" onChange={this.handleChange} selected={terms} />
             </div>   
            <div>
            <button type="submit">Add To Kourse</button>
            </div>
            <div>
                {error ? (
                    <div>
                        {error}
                    </div>
                ) : null
                }
            </div>
            </form>
            
         )
        }
 }
 export default AddToKourse;