import React from 'react';
import "./Navigation.css";
import Link from "../shared/Link/Link";



function Navigation() {
    return <nav className="navigation">
      <ul>
        <Link to="/">
          <img id="logo" src="/logo.svg" alt="my-app-logo" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/allCourses">Courses</Link>
        <Link to="/addNewCourse">AddNewCourse</Link>
        <Link to="/addToCourse">AddToCourse</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>;
  };
export default Navigation;