import React, {useEffect} from 'react';

import {compose} from 'redux';


import {getAuth, getMyProfile} from '../../../redux/auth-reducer'
import {connect} from 'react-redux';
import Profile from './Profile';

let ProfileContainer = (props) => {

  useEffect( () => {
    getMyProfile(props.id)
  }, [props.id])
   
return <Profile {...props} profile={props.profile}/>
}


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  profile: state.auth.myProfile
})


export default compose(
  connect(mapStateToProps, {getAuth, getMyProfile}),

)(ProfileContainer);