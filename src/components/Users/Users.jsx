import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import User from './User/User';
import Pagination from '../Common/Pagination/Pagination';

const Users = (props) => {
  return <div className="people-nearby">
    <Pagination
      totalItemsCount={props.totalUserCount}
      pageSize={props.pageSize}
      onPageChanged={props.onPageChanged}
      currentPage={props.currentPage}/> {props.fetching
      ? <Preloader/>
      : null}
    {!props.fetching && props
      .users
      .map(u => <User
        key={u.id}
        user={u}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow}/>)
}
    {/* <button className="btn btn-primary btn-more">Показать еще</button> */}
  </div>
}

export default Users;