import React from 'react';


let User = (props) => {
return (
   
  <div className="nearby-user">
    <div className="row">
      <div className="col-md-2 col-sm-2">
        <a href="#c" className="profile-photo-lg">
        <img src={props.photoUrl} alt="user" />
        </a>
      </div>
      <div className="col-md-7 col-sm-7">
        <h5><a href="#c" className="profile-link">{props.name}</a></h5>
        <p>{props.status}</p>

      </div>
      <div className="col-md-3 col-sm-3">
        {props.followed ? <button onClick={()=>{ }} className="btn btn-primary pull-right">Удалить из друзей</button> : <button className="btn btn-primary pull-right">Добавить в друзья</button>}
        
      </div>
    </div>
  </div>

);
}

export default User;