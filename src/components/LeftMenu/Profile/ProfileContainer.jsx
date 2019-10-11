import React, {useEffect} from 'react';

import {compose} from 'redux';


import {getAuth} from '../../../redux/auth-reducer'
import {getMyProfile} from '../../../redux/profile-reducer'
import {connect} from 'react-redux';
import Profile from './Profile';



let ProfileContainer = (props) => {

  useEffect(() => {
    props.getMyProfile(props.id)
  }, [props.id])
   
   
return <Profile {...props} profile={props.profile}/>
}


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  profile: state.profilePage.myProfile
})


export default compose(
  connect(mapStateToProps, {getAuth, getMyProfile}),

)(ProfileContainer);