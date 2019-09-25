import React from 'react';

import Preloader from '../Common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';



let Friends = (props) => {

  let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
  
  let pages = []
  for(let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  let totalPage = pages.map(p => {
    return (
      <span onClick={ () => { props.onPageChanged(p) } } className={props.currentPage === p && "currentPage"}>{p}</span>
      )
  } )

return (
  <div className="friend-list">
      <div className="pagination">
    {totalPage}
  </div>
  <div className="row">
  {props.fetching ? <Preloader /> : null}
    {!props.fetching && props.users.map(f =>  <div className="col-md-6 col-sm-6">
      <div className="friend-card">
        <img src="images/covers/10.jpg" alt="profile-cover" className="img-responsive cover" />
        <div className="card-info">
          <NavLink to={"/profile/" + f.id} className="profile-photo-lg">
          <img src={f.photos.large !== null ? f.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P9NIBPbZvN_8V2uZ8cVfm4Rnwwel8_UF_89HT238qUQAOZ1p'  }  alt="user" />
          </NavLink>
          <div className="friend-info">
            <a href="#c" className="pull-right text-green">Мой друг</a>
            <h5><a href="timeline.html" className="profile-link">{f.name}</a></h5>
            <p>{f.status}</p>
          </div>
        </div>
      </div>
    </div>)}
  </div>
</div>
);
}


export default Friends;