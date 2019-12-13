import React from 'react';
import "./Navigation.css";
import Link from "../shared/Link/Link";

function Navigation({ isLogged }) {
    return <nav className="navigation">
      
      <ul>
      <Link to="/">
        
        <img  src="logod.bmp" alt="my-app-logo" />
      </Link>
        <Link to="/">Home</Link>
        <Link to="/allCourses">All Courses</Link>
        {isLogged && <Link to="/addNewCourse">Add New Course</Link>}
        {/* {isLogged && <Link to="/addToCourse">Add Student To Course</Link>} */}
        {isLogged && <Link to="/createPost">Create Post</Link>}
        {isLogged && <Link to="/posts">All Posts</Link>}
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}
        {isLogged && <Link to="/logout">Logout</Link>}
      </ul>
    </nav>;
   
  };
export default Navigation;