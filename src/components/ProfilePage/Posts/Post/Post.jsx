import React from 'react';
let Post = (props) => {
  return       <div className="post-content">

  <div className="post-container">
  <a href="#c" className="profile-photo-md pull-left" >
      <img src="https://sun9-32.userapi.com/c847217/v847217358/12ef68/SBEQOk1q8Eo.jpg" alt="user" />
      </a>
    <div className="post-detail">
      <div className="user-info">
        <h5><a href="timeline.html" className="profile-link">{props.author}</a> <span className="following">Подписаны</span></h5>
        <p className="text-muted">2 дня назад</p>
      </div>
      <div className="reaction">
        <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i>{props.like}</a>
        <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i>{props.dislike}</a>
      </div>
      <div className="line-divider"></div>
      <div className="post-text">
        <p>{props.text}</p>
      </div>
    </div>
  </div>
</div>
}

export default Post;