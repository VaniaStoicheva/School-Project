import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer({isLogged}) {
  return <nav className="Footer">
    <ul>
    <Link to="/">Home</Link>
        <Link to="/allCourses">Courses</Link>
        {!isLogged && <Link to="/addNewCourse">AddNewCourse</Link>}
        {!isLogged && <Link to="/addToCourse">AddToCourse</Link>}
        <Link to="/posts">Posts</Link>
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}
    </ul>
  </nav>;
};

export default Footer;