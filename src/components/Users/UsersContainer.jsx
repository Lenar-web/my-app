import React from 'react';
import {connect} from 'react-redux';
import { follow, unfollow, getUsers, PageChanged } from '../../redux/user-reducer';
import Users from './Users';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.PageChanged(pageNumber, this.props.pageSize)
  }
  render() {
   return <> 
  
   <Users totalUserCount={this.props.totalUserCount} 
                  pageSize={this.props.pageSize}
                  onPageChanged={this.onPageChanged}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  fetching={this.props.fetching}
                  followingInProgress={this.props.followingInProgress}
                  />
                  </>
}
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    fetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}



export default compose(
  connect(mapStateToProps, { follow, unfollow, getUsers, PageChanged }),
  widthAuthRedirect

)(UsersContainer);

