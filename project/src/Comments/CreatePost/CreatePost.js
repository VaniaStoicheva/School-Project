import React from 'react';
import './CreatePost.css';
import requester from '../../services/requester';
import observer from '../../services/observer';

/* const CreatePost = ({ history }) => {
  const textareaRef = React.useRef();

  const createPost = React.useCallback(() => {
    
    const value = textareaRef.current.value;
    postService.create({ description: value }).then(() => {
      history.push('/posts');
    });
  }, [textareaRef, history]); */
  class CreatePost extends React.Component{
    constructor(props){
      super(props);
      this.state={
        comment:[]
      }
    }
    handleChange=e=>{
      let fielddName=e.target.name;
      let fieldValue=e.target.value;
      this.setState({[fielddName]:fieldValue});
      }
      handleSubmit = e =>{
        e.preventDefault();
        requester.post ('appdata','comments','kinvey',this.state)
        .then(res=>{
          this.setState({comment:res})
          this.props.history.push('/posts');
        }).catch(res=>{
          observer.trigger(observer.events.notification,{
            type:'error',
            message:res.responseJSON.description
          })
          this.setState({comment:''})
        }
          ); 
        
        
      }
    render(){
      return (
    <div className="CreatePost">
    <form>
    <label htmlFor="img">Image</label>
                <input name="imgUrl"  id="img" onChange={this.handleChange}/>
               
      <textarea  name="comment" onChange={this.handleChange}></textarea>
      <button type="submit" onClick={this.handleSubmit}>Create Post</button>
    </form>
    </div>
      )
    }
  }

  

export default CreatePost;