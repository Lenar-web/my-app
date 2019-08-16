import React from 'react';


let Message =(props) => {
  return (
    <li className={props.position}>
    <img src="images/users/user-2.jpg" alt="" className={'profile-photo-sm pull' + props.position} />
    <div className="chat-item">
      <div className="chat-item-header">
        <h5>{props.Name}</h5>
        <small className="text-muted">{props.date}</small>
      </div>
      <p>{props.message}</p>
    </div>
  </li>
  );
}
export default Message;