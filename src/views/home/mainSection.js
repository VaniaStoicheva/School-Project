import React from "react";
import Kourse from "./kourse";
import data  from '../../data';

 
class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {kourse}=this.props
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