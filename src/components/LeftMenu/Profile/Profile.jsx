import React from 'react';
import {NavLink} from 'react-router-dom';

let Profile = (props) => {
  return (

    <div className="profile-card">
      <NavLink to="/profile" className="profile-photo">
      <img src="https://sun9-32.userapi.com/c847217/v847217358/12ef68/SBEQOk1q8Eo.jpg" alt="user" className="profile-photo" />
      </NavLink>
      <h5><NavLink to="/profile" className="text-white">Ленар Евстафьев</NavLink></h5>
      <a href="#c" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 подписчиков</a>
    </div>

  );
}

export default Profile;