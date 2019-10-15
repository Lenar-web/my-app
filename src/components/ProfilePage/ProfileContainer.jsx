import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import{withRouter} from 'react-router-dom';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.AuthUserId;
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
   }
  }
  render() {
   return (
  <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
  )

}
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  AuthUserId: state.auth.id,
  isAuth: state.auth.isAuth
 })

 export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter,
  widthAuthRedirect,

)(ProfileContainer);

