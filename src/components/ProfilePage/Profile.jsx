import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = (props) => {
  return       (<div className="timeline">

<ProfileInfo profile={props.profile} />
<PostsContainer />
</div>
)
}

export default Profile;