import React from 'react';

import '../shared/styles/LoginAndRegister.css';
import requester from '../services/requester';
import observer from '../services/observer';



class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      repassword:''
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
        observer.trigger(observer.events.notification,{success:true, message:'Success register!'})
        sessionStorage.setItem('authtoken',res._kmd.authtoken)
        this.props.history.push('/allCourses');
      }).catch(res=>{
        observer.trigger(observer.events.notification,{
          type:'error',
          message:res.responseJSON.description
        })
        if(this.username==='' || this.password==='' || this.repassword==='' || this.password!==this.repassword){
          observer.trigger(observer.events.notification,{type:'error', message:'Password and repassword don`t match!'})
        }
        this.setState({username:'',password:'',repassword:''})
      } )
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

export default Register;