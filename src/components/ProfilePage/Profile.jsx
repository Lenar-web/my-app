import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let Profile = (props) => {
  return       (<div className="timeline">
<ProfileInfo AuthUserId={props.AuthUserId} profile={props.profile} status={props.status} updateStatus={props.updateStatus} profileToggle={props.profileToggle} isOwner={props.isOwner} />

<PostsContainer isOwner={props.isOwner}/>


</div>
)
}

export default Profile;