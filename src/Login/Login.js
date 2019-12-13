import React from 'react';
import '../shared/styles/LoginAndRegister.css';
import withForm from '../shared/hocs/whitForm';
import userService from '../services/UserService';
import * as yup from 'yup';

class Login extends React.Component {
  state={error:null}
  usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

  
  submitHandler=()=>{
    this.props.runValidation()
   .then(formData=>console.log(formData)) ;
   const errors=this.props.getFormErrorState();
   if(!!errors){return;}
   const data=this.props.getFormState();
   this.props.login(this.props.history, data).catch(error=>{
     this.setState({error})
   });
 };
  getFirstInputErrors=name=>{
    const errorState=this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  }
  render() {
    const {error}=this.state;
    const usermameError=this.getFirstInputErrors('username');
    const passwordError=this.getFirstInputErrors('password');

    return <form className="Login">
      
      <div className="form-control">
      <h1>Login</h1>
        <label>Username</label>
        <input type="text" onChange={this.usernameChangeHandler} />
        {usermameError &&<div className='error'>{usermameError}</div>}
      </div>
      <div className="form-control">
        <label>Password</label>
        <input type="password" onChange={this.passwordChangeHandler} />
        {passwordError &&<div className='error'>{passwordError}</div>}
      </div>
      <div className="error">{error && error}</div>
      
      <div className="form-control">
        <button type="button" onClick={this.submitHandler}>Login</button>
      </div>
    </form>;
  }
}
const schema=yup.object({
  username: yup.string('Username shuld be a string')
  .required('Username is required')
  .min(4,'Username must be more than 4 chars'),
    password: yup.string('Password must be a string')
    .required('Password is required')
    .min(6,'Password must be more than 6 chars')
})
    
    
export default withForm(Login, { username: '', password: '' },schema);