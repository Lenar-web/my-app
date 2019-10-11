import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
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
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
          ? [
            ...state.followingInProgress,
            action.userId
          ]
          : state
            .followingInProgress
            .filter(id => id !== action.userId)
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

export const getRequestUsers = (currentPage, pageSize) => async(dispatch) => {
  dispatch(isFetching(true));
  let data = await usersAPI.getUser(currentPage, pageSize)
  dispatch(setUsers(data.items));
  dispatch(isFetching(false));
  dispatch(setUsersTotalCount(data.totalCount));
}

export const PageChanged = (pageNumber, pageSize) => async(dispatch) => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(isFetching(true));
  let data = await usersAPI.getUser(pageNumber, pageSize)
  dispatch(isFetching(false));
  dispatch(setUsers(data.items));
}

const followUnfollowFlow = async(userId, dispatch, apiMethod, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let resultCode = await apiMethod(userId)
  if (resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingInProgress(false, userId));
}
export const follow = (userId) => async(dispatch) => {
  followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unfollow = (userId) => async(dispatch) => {
  followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default userReducer;