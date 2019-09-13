import React from 'react';
import {AddPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/post-reducer';
import CreatePost from './CreatePost'
import StoreContext from '../../../StoreContext';

let CreatePostContainer = (props) => {


  return <StoreContext.Consumer>  
  { (store) => {

let state= store.getState().newsPage;

let onAddPost = () => {
store.dispatch(AddPostActionCreator());
}

let onPostChange = (text) => {
  let action = updateNewPostTextActionCreator(text);
  store.dispatch(action);
}

   return <CreatePost 
   updateNewPostText={onPostChange} newPostText={state.newPostText} addPost={onAddPost}/>
     }
    }
  </StoreContext.Consumer>
  
}
  export default CreatePostContainer;