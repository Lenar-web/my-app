import React from 'react';
import Post from './Post/Post';
import CreatePostForm from './CreatePost';

let Posts = (props) => {
  
let posts = props.posts.map( p => <Post author={p.author} id={p.id} dislike={p.dislike} like={p.like} text={p.text}  />)

let addPost = (values) => {
  props.addPost(values.newPostText)
}

  return(
  <div id="page-contents">
  <div className="row">
    <div className="col-md-12">
      <div className="create-post">
        <CreatePostForm onSubmit={addPost}/>
      </div>

{posts}

    </div>
  </div>
</div>
  )
}
export default Posts;