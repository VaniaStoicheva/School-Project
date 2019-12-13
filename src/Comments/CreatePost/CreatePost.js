import React from 'react';
import Posts from '../Posts/Posts';
import postService from '../../services/PostService';
import './CreatePost.css';

const CreatePost = ({ history }) => {
  const textareaRef = React.useRef();

  const createPost = React.useCallback(() => {
    
    const value = textareaRef.current.value;
    postService.create({ description: value }).then(() => {
      history.push('/posts');
    });
  }, [textareaRef, history]);

  return <div className="CreatePost">
    <form>
      <textarea ref={textareaRef}></textarea>
      <button type="button" onClick={createPost}>Create Post</button>
    </form>
    
  </div>;
}

export default CreatePost;