import React from 'react';
import {NavLink} from 'react-router-dom';

let User = ({user,followingInProgress, follow, unfollow}) => {

return (
   
<div className="nearby-user">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <NavLink to={"/profile/" + user.id}className="profile-photo-lg">
          <img src={user.photos.large !== null ? user.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P9NIBPbZvN_8V2uZ8cVfm4Rnwwel8_UF_89HT238qUQAOZ1p'  }  alt="user" />
          </NavLink>
        </div>
        <div className="col-md-7 col-sm-7">
          <h5><NavLink to={"/profile/" + user.id} className="profile-link">{user.name}</NavLink></h5>
          <p>{user.status}</p>
    
        </div>
        <div className="col-md-3 col-sm-3">
          {user.followed 
            ? <button disabled={followingInProgress.some(id => id === user.id)} 
            onClick={()=>{unfollow(user.id)}} 
            className="btn btn-primary pull-right">Удалить из друзей</button> 
            : <button disabled={followingInProgress.some(id => id === user.id)} 
            onClick={()=>{follow(user.id)}} 
            className="btn btn-primary pull-right">Добавить в друзья</button>}
          
        </div>
      </div>
    </div>

);
}

export default User;