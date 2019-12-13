import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer({isLogged}) {
  return <nav className="Footer">
    <ul>
        {/* <Link to="/">Home</Link> */}
        <Link to="/allCourses">Courses</Link>
        {isLogged && <Link to="/addNewCourse">Add New Course</Link>}
        {isLogged && <Link to="/addToCourse">Add Student To Course</Link>}
        {isLogged && <Link to="/createPost">Create Post</Link>}
        {isLogged && <Link to="/posts">All Posts</Link>}
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}
        {isLogged && <Link to="/logout">Logout</Link>}
    </ul>
  </nav>;
};

export default Footer;