import React from 'react';
import Post from './Post/Post';
import CreatePostReduxForm from './CreatePost/CreatePost';
import About from '../About/About';


let Posts = (props) => {
let posts = props.posts.map( p => <Post author={p.author} key={p.id} id={p.id} dislike={p.dislike} like={p.like} text={p.text}  />)

let addPost = (values) => {
  props.addPost(values.newPostText)
}

  return(
  <div id="page-contents">
  <div className="row">
    <div className="col-md-12">
      {props.profile && <About profile={props.profile} isOwner={props.isOwner}/>}
      
      <div className="create-post">
        <CreatePostReduxForm onSubmit={addPost} change={props.change} untouch={props.untouch}/>
      </div>

{posts}

    </div>
  </div>
</div>
  )
}
export default Posts;