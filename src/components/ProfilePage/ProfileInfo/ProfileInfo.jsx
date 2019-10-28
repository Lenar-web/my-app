import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusComponent from './ProfileStatus/ProfileStatusComponent';

let ProfileInfo = React.memo((props) => {
  if (!props.profile) {
    return (<Preloader/>)
  }
  return (
    <div className="timeline-cover">

      <div className="timeline-nav-bar hidden-sm hidden-xs">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-info">
              <a href="#c" className="img-responsive profile-photo">
                <img
                  src={props.profile.photos.large !== null
                  ? props.profile.photos.large
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P9NIBPbZvN_8V2uZ8cVfm4Rn' +
                    'wwel8_UF_89HT238qUQAOZ1p'}
                  alt="user"/>
              </a>
              <h3>{props.profile.fullName}</h3>
              {props.isOwner
                ? <ProfileStatusComponent
                    status={props.status}
                    updateStatus={props.updateStatus}/>
                : <p className="text-muted">{props.status || 'No status'}</p>}
            </div>
          </div>
          <div className="col-md-8">
            <ul className="list-inline profile-menu">
              <li>
                <a href="timeline.html">Стена</a>
              </li>
              <li>
                <a href="#c">Обо мне</a>
              </li>
              <li>
                <a href="timeline-album.html">Альбом</a>
              </li>
              <li>
                <a href="timeline-friends.html">Друзья</a>
              </li>
            </ul>
            {/* <ul className="follow-me list-inline">
            <li>1,299 Подписчиков</li>
            <li><button className="btn-primary">Add Friend</button></li>
          </ul> */}
          </div>
        </div>

      </div>

      <div className="navbar-mobile hidden-lg hidden-md">
        <div className="profile-info">
          <a href="#c" className="img-responsive profile-photo">
            <img
              src="https://sun9-32.userapi.com/c847217/v847217358/12ef68/SBEQOk1q8Eo.jpg"
              alt=""/>
          </a>
          <h4>Sarah Cruiz</h4>
          <p className="text-muted">Creative Director</p>
        </div>
        <div className="mobile-menu">
          <ul className="list-inline">
            <li>
              <a href="timline.html" className="active">Timeline</a>
            </li>
            <li>
              <a href="timeline-about.html">About</a>
            </li>
            <li>
              <a href="timeline-album.html">Album</a>
            </li>
            <li>
              <a href="timeline-friends.html">Friends</a>
            </li>
          </ul>
          {/* <button className="btn-primary">Add Friend</button> */}
        </div>
      </div>
      <div></div>
    </div>
  )
})
export default ProfileInfo