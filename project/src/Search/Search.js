import React from 'react';
import "./Search.css";

const Search = () => {
    return(
        <div>
       <h1>Main Favorite School</h1>
           <form action="/search">
            <input type="text" />
            <button type="button">Search</button>
        </form>
</div>
    )  
}
export default Search;