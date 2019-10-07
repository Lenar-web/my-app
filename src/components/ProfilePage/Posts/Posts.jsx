import React from 'react';
import Post from './Post/Post';
import CreatePostReduxForm from './CreatePost/CreatePost';

let Posts = (props) => {
  
let posts = props.posts.map( p => <Post author={p.author} key={p.id} id={p.id} dislike={p.dislike} like={p.like} text={p.text}  />)

let addPost = (values) => {
  props.addPost(values.newPostText)
}

  return(
  <div id="page-contents">
  <div className="row">
    <div className="col-md-12">
      <div className="create-post">
        <CreatePostReduxForm onSubmit={addPost}/>
      </div>

{posts}

    </div>
  </div>
</div>
  )
}
export default Posts;