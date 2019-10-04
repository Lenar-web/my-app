import React from 'react';
import {NavLink} from 'react-router-dom';
import { widthAuthRedirect } from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';
import{withRouter} from 'react-router-dom';

import {getAuth, getMyProfile} from '../../../redux/auth-reducer'
import {connect} from 'react-redux';
import Profile from './Profile';

class ProfileContainer extends React.Component {
 
  componentDidUpdate(prevProps) {
    if(prevProps.id !== this.props.id) {
    this.props.getMyProfile(this.props.id)
  }
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
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