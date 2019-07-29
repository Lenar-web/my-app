import React from 'react';

let LeftMenu = () => {
  return (

    <div className="col-md-3 static">
    <div className="profile-card">
      <img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
      <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
      <a href="#c" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
    </div>

    <ul className="nav-news-feed">
      <li><i className="icon ion-ios-paper"></i><div><a href="newsfeed.html">My Newsfeed</a></div></li>
      <li><i className="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
      <li><i className="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
      <li><i className="icon ion-chatboxes"></i><div><a href="newsfeed-messages.html">Messages</a></div></li>
      <li><i className="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
      <li><i className="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
    </ul>

    <div id="chat-block">
      <div className="title">Chat online</div>
      <ul className="online-users list-inline">
        <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="images/users/user-2.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="Sophia Lee"><img src="images/users/user-3.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="John Doe"><img src="images/users/user-4.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="Alexis Clark"><img src="images/users/user-5.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="James Carter"><img src="images/users/user-6.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="Robert Cook"><img src="images/users/user-7.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="Richard Bell"><img src="images/users/user-8.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="Anna Young"><img src="images/users/user-9.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
        <li><a href="newsfeed-messages.html" title="Julia Cox"><img src="images/users/user-10.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
      </ul>
    </div>
  </div>

  );
}

export default LeftMenu;