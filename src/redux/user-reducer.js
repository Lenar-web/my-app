import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const IS_FETCHING = "IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";
let initialState = {
  users: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
      case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if(u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: 
    return {
      ...state,
      users: action.users
    }
    case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.currentPage
    }
    case SET_USERS_TOTAL_COUNT:
    return {
      ...state,
      totalUserCount: action.count
    }
    case IS_FETCHING:
    return {
      ...state,
      isFetching: action.isFetching
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter( id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count})
export const isFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})


export const getUsers = (currentPage,pageSize) =>{
return (dispatch) => {
  dispatch(isFetching(true));
  usersAPI.getUser(currentPage, pageSize)
  .then(data => {
    dispatch(setUsers(data.items));
    dispatch(isFetching(false));
    dispatch(setUsersTotalCount(data.totalCount));
    });
  }
}

export const PageChanged = (pageNumber, pageSize) => {
return (dispatch) => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(isFetching(true));
  usersAPI.getUser(pageNumber, pageSize).then(data => {
    dispatch(isFetching(false));
    dispatch(setUsers(data.items));
    });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId)); 
    usersAPI.follow(userId).then(resultCode => {
      if(resultCode === 0) {
    dispatch(followSuccess(userId))
  }
  dispatch(toggleFollowingInProgress(false, userId));  
   });
    }
  }
  export const unfollow = (userId) => {
    return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, userId)); 
      usersAPI.unfollow(userId).then(resultCode => {
        if(resultCode === 0) {
      dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));  
     });
      }
    }

export default userReducer;