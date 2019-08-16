import React from 'react';
import {NavLink} from 'react-router-dom';

let DialogsItem =(props) => {
  let path = "/dialogs/"+ props.id;
  return (
    <li>
    <NavLink to={path}>
      <div className="contact">
        <img src="images/users/user-10.jpg" alt="" className="profile-photo-sm pull-left" />
        <div className="msg-preview">
          <h6>{props.name}</h6>
          <p className="text-muted">{props.lastMessage}</p>
          <small className="text-muted">{props.time}</small>
          <div className="seen"><i className="icon ion-checkmark-round"></i></div>
          {/* <div className="replied"><i className="icon ion-reply"></i></div>
          <div className="chat-alert">1</div> */}
        </div>
      </div>
    </NavLink>
  </li>
  );
}


export default DialogsItem;