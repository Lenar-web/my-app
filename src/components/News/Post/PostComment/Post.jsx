import React from 'react';

let PostComment = (props) => {
  return (
        <div className="post-comment">
          <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
          <p><a href="timeline.html" className="profile-link">{props.author}</a> {props.comment} </p>
        </div>
  );
  }
  export default PostComment;