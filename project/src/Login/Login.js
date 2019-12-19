import React from 'react';
import '../shared/styles/LoginAndRegister.css';
import withForm from '../shared/hocs/whitForm';

import * as yup from 'yup';
import requester from '../services/requester';
import observer from '../services/observer';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:null,
      password:null,
      error:null,
       login:false
    
  }
  }
  
  

  handleChange=e=>{
  let fielddName=e.target.name;
  let fieldValue=e.target.value;
  this.setState({[fielddName]:fieldValue});
  }
  handleSubmit = e =>{
    e.preventDefault();
    requester.post('user','login','basic',this.state)
    .then(res=>{
      observer.trigger(observer.events.loginUser,res.username);
      observer.trigger(observer.events.notification,{success:true, message:'Success login!'})
      sessionStorage.setItem('authtoken',res._kmd.authtoken)
    }).catch(res=>observer.trigger(observer.events.notification,{type:'error',message:res.responseJSON.description})); 
  }
 
  render=()=> {
    

    return(
       <form className="Login" id="loginForm" onSubmit={this.handleSubmit}>
      
      <div className="form-control">
      <h1>Login</h1>
        <label>Username</label>
        <input type="text" onChange={this.handleChange} name="username"/>
        
      </div>
      <div className="form-control">
        <label>Password</label>
        <input type="password" onChange={this.handleChange} name="password"/>
       
      </div>
     
      
      <div className="form-control">
        <button type="submit" >Login</button>
      </div>
    </form>
    )
  }
}

    
    
export default Login;