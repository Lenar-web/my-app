import React from 'react';
import PostComment from './PostComment/Post';
import NewComment from './NewComment/NewComment';

let Post = () => {
  return (
    <div className="post-content">
    <img src="images/post-images/1.jpg" alt="post-sdimage" className="img-responsive post-image" />
    <div className="post-container">
      <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
      <div className="post-detail">
        <div className="user-info">
          <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
          <p className="text-muted">Published a photo about 3 mins ago</p>
        </div>
        <div className="reaction">
          <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
          <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
        </div>
        <div className="line-divider"></div>
        <div className="post-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
        </div>
        <div className="line-divider"></div>
        <PostComment author="Диана" comment="<i className='em em-anguished'></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" />
        <PostComment author="Джон" comment=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"/>
        <NewComment />
      </div>
    </div>
  </div>
  );
  }
  export default Post;