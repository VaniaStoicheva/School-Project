import React from "react";
import Kourse from "../../";
import data  from '../../data';
import "../Main/Main";
import kourseService from "../../services/CourseService";

 
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