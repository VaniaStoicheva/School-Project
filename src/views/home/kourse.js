import React from "react";

const Kourse=()=>{
    return(
        <li>
        <img src="https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_1280.jpg" alt="Black Cat" />
        <h3></h3>
        <p><span>Breed: </span>Bombay Cat</p>
        <p><span>Description: </span>Dominant and aggressive to other cats. Will probably eat you 
        in your sleep. Very cute tho.</p>
        <ul class="buttons">
            <li class="btn edit"><a href="">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li>
        </ul> 
        </li>
    )
}
export default Kourse;