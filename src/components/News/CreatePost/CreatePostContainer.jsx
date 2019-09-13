import React from 'react';
import {AddPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/post-reducer';
import CreatePost from './CreatePost'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.newsPage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(AddPostActionCreator());
  },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
  }
 }
}
const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

  export default CreatePostContainer;