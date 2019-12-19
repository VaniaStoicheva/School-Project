import React from 'react';

import '../shared/styles/LoginAndRegister.css';
import whitForm from '../shared/hocs/whitForm';
import userService from '../services/UserService';


import * as yup from 'yup';
import requester from '../services/requester';
import observer from '../services/observer';



class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:null,
      password:null,
      repassword:null
    }
  }


  handleChange=e=>{
    let fielddName=e.target.name;
    let fieldValue=e.target.value;
    this.setState({[fielddName]:fieldValue});
    }
    handleSubmit = e =>{
      e.preventDefault();
      requester.post ('user','','basic',this.state)
      .then(res=>{
        observer.trigger(observer.events.loginUser,res.username)
        sessionStorage.setItem('authtoken',res._kmd.authtoken)
      }); 
    }
  render(){
    

    return <form className="Register">
      
    <div className="form-control">
    <h1>Register</h1>
      <label>Username</label>
      <input type="text" onChange={this.handleChange} name="username"/>
      
    </div>
    <div className="form-control">
      <label>Password</label>
      <input type="password" onChange={this.handleChange} name="password"/>
     
    </div>
    <div className="form-control">
      <label>Re-Password</label>
      <input type="password" onChange={this.handleChange}  name="repassword"/>
    
    </div>
    <div className="form-control">
    <button type="button" onClick={this.handleSubmit}>Register</button>
    </div>
  </form>;
}
}
const initialFormState = {
  username: '',
  password: '',
  rePassword: ''
};
const schema=yup.object({
  username: yup.string('Username shuld be a string')
  .required('Username is required')
  .min(4,'Username must be more than 4 chars'),
    password: yup.string('Password must be a string')
    .required('Password is required')
    .min(6,'Password must be more than 6 chars'),
    rePassword: yup.string('Password must be a string')
    .oneOf([yup.ref('password'),null],'Pawword dont match')
    .required('Password is required')
    .min(6,'Password must be more than 6 chars')
    
})
export default whitForm(Register,initialFormState, schema);