import React from 'react';
import {addPost,updateNewPostText} from '../../../redux/profile-reducer';
import CreatePostForm from './CreatePost'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.newsPage.newPostText
  }
}

const CreatePostContainer = connect(mapStateToProps, {addPost ,updateNewPostText})(CreatePostForm);

  export default CreatePostContainer;