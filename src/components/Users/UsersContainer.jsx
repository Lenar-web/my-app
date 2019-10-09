import React from 'react';
import {connect} from 'react-redux';
import { follow, unfollow, getRequestUsers, PageChanged } from '../../redux/user-reducer';
import Users from './Users';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getUsers,getPageSize,getTotalUserCount,getCurrentPage,getIsFetching,getFollowingInProgress} from '../../redux/user-selector'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getRequestUsers(this.props.currentPage,this.props.pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    fetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}



export default compose(
  connect(mapStateToProps, { follow, unfollow, getRequestUsers, PageChanged }),
  widthAuthRedirect

)(UsersContainer);

