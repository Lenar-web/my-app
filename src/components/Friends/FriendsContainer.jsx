import React from 'react';
import {connect} from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, isFetching } from '../../redux/user-reducer';
import * as axios from 'axios';
import Friends from './Friends';


class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.isFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
        this.props.setUsers(response.data.items);
        this.props.isFetching(false);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.isFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
        this.props.isFetching(false);
        this.props.setUsers(response.data.items);
      });
  }
  render() {
   return    <Friends totalUserCount={this.props.totalUserCount} 
                  pageSize={this.props.pageSize}
                  onPageChanged={this.onPageChanged}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  fetching={this.props.fetching}
                  />

}
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    fetching: state.usersPage.isFetching
  }
}

export default FriendsContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, isFetching })(FriendsContainer);
