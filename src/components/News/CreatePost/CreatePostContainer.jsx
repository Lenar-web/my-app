import React from 'react';
import {addPost,updateNewPostText} from '../../../redux/profile-reducer';
import CreatePost from './CreatePost'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostText: state.newsPage.newPostText
  }
}

const CreatePostContainer = connect(mapStateToProps, {addPost ,updateNewPostText})(CreatePost);

  export default CreatePostContainer;