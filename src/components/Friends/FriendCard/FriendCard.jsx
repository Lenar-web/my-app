import React from 'react';


let FriendCard = (props) => {
return (
    <div className="col-md-6 col-sm-6">
      <div className="friend-card">
        <img src="images/covers/10.jpg" alt="profile-cover" className="img-responsive cover" />
        <div className="card-info">
          <img src="images/users/user-5.jpg" alt="user" className="profile-photo-lg" />
          <div className="friend-info">
            <a href="#c" className="pull-right text-green">My Friend</a>
            <h5><a href="timeline.html" className="profile-link">{props.name}</a></h5>
            <p>Traveler</p>
          </div>
        </div>
      </div>
    </div>

);
}

export default FriendCard;