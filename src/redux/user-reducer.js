const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
let initialState = {
  users: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1
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
    default:
      return state;
  }
}

export const followAС = (userId) => ({type: FOLLOW, userId});
export const unfollowAС = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAС = (users) => ({type: SET_USERS, users});
export const setCurrentPageAС = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (count) => ({type: SET_USERS_TOTAL_COUNT, count})


export default userReducer;