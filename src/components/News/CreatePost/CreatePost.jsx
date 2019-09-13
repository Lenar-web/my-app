import React from 'react';

let CreatePost = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
    
  }
  return (
    <div className="create-post">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="form-group">
          <a href="#c" className="profile-photo-md" >
          <img src="https://sun9-32.userapi.com/c847217/v847217358/12ef68/SBEQOk1q8Eo.jpg" alt="" />
          </a>
          <textarea name="texts" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Напишите, что у вас нового" onChange={onPostChange} ref={ newPostElement } value={props.newPostText}></textarea>
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
          <button className="btn btn-primary pull-right" onClick={ onAddPost }>Опубликовать</button>
        </div>
      </div>
    </div>
  </div>
  );
  }
  export default CreatePost;