import React from 'react';
import {NavLink} from 'react-router-dom';

let Profile = (props) => {

  return (
    <div className="profile-card">
      {props.profile !== null && props.isAuth === true
      && <div>
        <NavLink to="/profile" className="profile-photo">
        <img src={props.profile.photos.large !== null ? props.profile.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P9NIBPbZvN_8V2uZ8cVfm4Rnwwel8_UF_89HT238qUQAOZ1p'  }  alt="user" className="profile-photo" />
      </NavLink>
      <h5><NavLink to="/profile" className="text-white">{props.profile.fullName || 'no status'}</NavLink></h5>
        </div>
      }
      
    </div>

  );
}

export default Profile;