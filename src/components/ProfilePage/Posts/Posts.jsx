import React from 'react';
import Post from './Post/Post';

let Posts = (props) => {
  
let posts = props.posts.map( p => <Post author={p.author} id={p.id} dislike={p.dislike} like={p.like} text={p.text}  />)

let addPost = () => {
  props.addPost()
}

let newTextElement = React.createRef();

let updateNewPostText = () => {
  let body = newTextElement.current.value
  props.updateNewPostText(body)
}
  return(
  <div id="page-contents">
  <div className="row">
    <div className="col-md-12">
      <div className="create-post">
      <div className="row">
    <div className="col-md-12 col-sm-12">
      <div className="form-group">
        <a href="#c" className="profile-photo-md" >
        <img src="https://sun9-32.userapi.com/c847217/v847217358/12ef68/SBEQOk1q8Eo.jpg" alt="" />
        </a>
        <textarea ref={newTextElement} onChange={updateNewPostText} value={props.newPostText} name="texts" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Напишите, что у вас нового"></textarea>
      </div>
    </div>
    <div className="col-md-12 col-sm-12">
      <div className="tools">
        <ul className="publishing-tools list-inline">
          <li><a href="#c"><i className="ion-compose"></i></a></li>
          <li><a href="#c"><i className="ion-images"></i></a></li>
          <li><a href="#c"><i className="ion-ios-videocam"></i></a></li>
          <li><a href="#c"><i className="ion-map"></i></a></li>
        </ul>
        <button onClick={addPost} className="btn btn-primary pull-right">Опубликовать</button>
      </div>
    </div>
  </div>
      </div>

{posts}

    </div>
  </div>
</div>
  )
}
export default Posts;