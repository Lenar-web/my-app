import React from 'react';
import {connect} from 'react-redux';
import { followAС, unfollowAС, setUsersAС, setCurrentPageAС, setUsersTotalCountAC } from '../../redux/user-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
   return (<Users totalUserCount={this.props.totalUserCount} 
                  pageSize={this.props.pageSize}
                  onPageChanged={this.onPageChanged}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  />)
}
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAС(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAС(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAС(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAС(pageNumber))
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
 }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;