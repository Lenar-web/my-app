import React from 'react';
import FriendCard from './FriendCard/FriendCard';





let Friends = (props) => {

  let Friend = props.state.map(f => <FriendCard  name={f.name} status={f.status}/>);
return (
  <div className="friend-list">
  <div className="row">
    { Friend }
  </div>
</div>
);
}

export default Friends;