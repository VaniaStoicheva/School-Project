import React from "react";
import "./Posts.css";


import Post from '../Post/Post';


import requester from '../../services/requester';
import observer from "../../services/observer";



class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: ''
    };
  }
 
  getPosts=()=>{
    requester.get('appdata','comments','kinvey')
    .then(res=>{
      
        /* observer.trigger(observer.events.notification,{success:true, message:'Success post created!'})
        sessionStorage.setItem('authtoken',res._kmd.authtoken);
        this.props.history.push('/posts'); */
        this.setState({posts:res});
      }).catch(res=>{
        observer.trigger(observer.events.notification,{
          type:'error',
          message:res.responseJSON.description
        })
        
    });
  }

  componentDidMount=()=>this.getPosts();

 
  render() {
    const { posts } = this.state;

    return <div>
    
      {posts ?
        <div className="Posts">
          {posts.map((post) =>
         
            <Post key={post._id}  imageUrl={post.imgUrl} imageAlt="alt"   author={post.author}>{post.comment}</Post>)}
        </div> : <div>Loading...</div>
      }
    </div>
  }
}



export default Posts;