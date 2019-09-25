import {connect} from 'react-redux';
import Posts from './Posts';
import {addPost, updateNewPostText} from '../../../redux/profile-reducer'

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    addPost: () => {
      dispatch(addPost())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text))
    },
  }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);
export default PostsContainer;