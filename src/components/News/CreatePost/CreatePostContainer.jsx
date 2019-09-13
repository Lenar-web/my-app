import React from 'react';
import {AddPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/post-reducer';
import CreatePost from './CreatePost'

let CreatePostContainer = (props) => {
  let state= props.store.getState().newsPage;

  let onAddPost = () => {
    props.store.dispatch(AddPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }
  return (<CreatePost 
    updateNewPostText={onPostChange} newPostText={state.newPostText} addPost={onAddPost}/>);
  }
  export default CreatePostContainer;