import React from 'react';
import {connect} from 'react-redux';
import Posts from './Posts';
import {addPost} from '../../../redux/profile-reducer'


const PostsContainer = (props) => {
return <Posts {...props} />
}

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  }
}


export default connect(mapStateToProps,{addPost})(PostsContainer);