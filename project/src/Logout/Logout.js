import React from 'react';
import requester from '../services/requester';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component{
  logout=()=>{
    requester.post('user','_logout','kinvey')
    .then(res=>sessionStorage.removeItem('authtoken'));
  }
  render=()=><Redirect to='/' />
}

export default Logout;