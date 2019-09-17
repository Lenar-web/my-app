import React from 'react';

const Users = (props) => {

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
return <div className="people-nearby">
  <div className="pagination">
    {totalPage}
  </div>
    {props.users.map(u => <div className="nearby-user">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <a href="#c" className="profile-photo-lg">
          <img src={u.photos.large !== null ? u.photos.large : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P9NIBPbZvN_8V2uZ8cVfm4Rnwwel8_UF_89HT238qUQAOZ1p'  }  alt="user" />
          </a>
        </div>
        <div className="col-md-7 col-sm-7">
          <h5><a href="#c" className="profile-link">{u.name}</a></h5>
          <p>{u.status}</p>
    
        </div>
        <div className="col-md-3 col-sm-3">
          {u.followed 
            ? <button onClick={()=>{ props.unfollow(u.id) }} className="btn btn-primary pull-right">Удалить из друзей</button> 
            : <button onClick={()=>{ props.follow(u.id) }} className="btn btn-primary pull-right">Добавить в друзья</button>}
          
        </div>
      </div>
    </div>)
    }
<button className="btn btn-primary btn-more">Показать еще</button>
</div>
}


export default Users;