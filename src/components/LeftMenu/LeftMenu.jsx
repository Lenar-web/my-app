import React from 'react';
import {NavLink} from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';



let LeftMenu = () => {
  return (

    <div className="col-md-3 static">
      <ProfileContainer />

      <ul className="nav-news-feed">
        <li>
          <i className="icon ion-ios-contact"></i>
          <div>
            <NavLink to="/profile">Мой профиль</NavLink>
          </div>
        </li>
        {/* <li><i className="icon ion-ios-paper"></i><div><NavLink to="/news">Мои новости</NavLink></div></li> */}
        <li>
          <i className="icon ion-ios-people"></i>
          <div>
            <NavLink to="/users">Люди</NavLink>
          </div>
        </li>
        {/* <li><i className="icon ion-ios-people-outline"></i><div><NavLink to="/friends">Друзья</NavLink></div></li> */}
        <li>
          <i className="icon ion-chatboxes"></i>
          <div>
            <NavLink to="/dialogs">Сообщения</NavLink>
          </div>
        </li>
        {/* <li><i className="icon ion-images"></i><div><NavLink to="/images">Изображения</NavLink></div></li>
      <li><i className="icon ion-ios-videocam"></i><div><NavLink to="/videos">Видео</NavLink></div></li> */}
      <li><i className="icon ion-ios-videocam"></i><div><NavLink to="/setting">Настройки</NavLink></div></li>
      </ul>
    </div>

  );
}

export default LeftMenu;