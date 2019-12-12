import React from 'react';
import "./Navigation.css";
import Link from "../shared/Link/Link";




function Navigation({ isLogged }) {
    return <nav className="Navigation">
      <ul>
      <Link to="/">
        <img id="logo" src="/logo.svg" alt="my-app-logo" />
      </Link>
        <Link to="/">Home</Link>
        <Link to="/allCourses">Courses</Link>
        {isLogged && <Link to="/addNewCourse">AddNewCourse</Link>}
        {isLogged && <Link to="/addToCourse">AddToCourse</Link>}
        {isLogged && <Link to="/posts">Posts</Link>}
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}
        {isLogged && <Link to="/logout">Logout</Link>}
      </ul>
    </nav>;
  };
export default Navigation;