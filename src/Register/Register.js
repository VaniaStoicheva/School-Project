import React from 'react';

import '../shared/styles/LoginAndRegister.css';
import whitForm from '../shared/hocs/whitForm';

import * as yup from 'yup';


class Register extends React.Component {

  usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
  rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');

 

      submitHandler=()=>{
        this.props.runValidation()
        .then(formData=>console.log(formData))
      };
      getFirstInputErrors=name=>{
        const errorState=this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
      }
  render(){
    const usermameError=this.getFirstInputErrors('username');
    const passwordError=this.getFirstInputErrors('password');
    const rePasswordError=this.getFirstInputErrors('rePassword');

    return <form className="Register">
      <h1>Register</h1>
    <div className="form-control">
      <label>Username</label>
      <input type="text" onChange={this.usernameOnChangeHandler} />
      {usermameError &&<div className='error'>{usermameError}</div>}
    </div>
    <div className="form-control">
      <label>Password</label>
      <input type="password" onChange={this.passwordOnChangeHandler} />
      {passwordError &&<div className='error'>{passwordError}</div>}
    </div>
    <div className="form-control">
      <label>Re-Password</label>
      <input type="password" onChange={this.rePasswordOnChangeHandler}  />
      {rePasswordError &&<div className='error'>{rePasswordError}</div>}
    </div>
    <div className="form-control">
    <button type="button" onClick={this.submitHandler}>Register</button>
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