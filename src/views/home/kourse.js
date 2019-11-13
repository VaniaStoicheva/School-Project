import React from "react";



const Kourse=({kourse})=>{
    
    return(
        <li>
        <img src={kourse.img} />
        <h3></h3>
        <p><span>Title: </span>{kourse.title}</p>
        <p><span>Description: </span>{kourse.description}</p>
        <p><span>Hours: </span>{kourse.hours}</p>
        <p><span>Day Visit: </span>{kourse.dayVisit}</p>
        <p><span>Theachers: </span>{kourse.theachers}</p>
         <ul class="buttons">
             <li class="btn edit"><a href="">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li> 
        </ul>  
        </li>
        
    )
}
    

export default Kourse;