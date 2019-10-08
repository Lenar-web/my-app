import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let Profile = (props) => {
  return       (<div className="timeline">
<ProfileInfo AuthUserId={props.AuthUserId} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
<PostsContainer />
</div>
)
}

export default Profile;