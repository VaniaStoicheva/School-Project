import React from "react";
import Kourse from "../Kourses/Kourse";
import data  from '../data';
import "../HomePage/HomePage";
import kourseService from "../services/KourseService";

 
class Main extends React.Component{
    constructor(props){
        super(props)
    }
 
state={
  kourses:null
};

componentDidMount(){
  kourseService.load().then(kourses=>{
      this.setState({kourses})
  })
}
    render(){
        const {kourse}=this.props;
        return(
            <main>
            <section class="cats">
                <ul>
                    <li>
                   
   
                     <Kourse kourse={data[0]}/> 
                    </li>
                </ul>
            </section>
            </main>
         )
    }
     
 }
 export default Main;