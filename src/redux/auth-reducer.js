import {
  AuthMeAPI,
  profileAPI
} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = "SET-USER-DATA";
const SET_MY_PROFILE = "SET-MY-PROFILE";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  myProfile: null,
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      };
    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.profile
      };
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id,email,login, isAuth}});
export const setMyProfile = (profile) => ({
  type: SET_MY_PROFILE,
  profile
});

export const getAuth = () => {
  return (dispatch) => {
    return AuthMeAPI.me()
      .then(data => {
        if (data.resultCode === 0) {
          let {id,email,login} = data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
      });
  }
}

export const getMyProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setMyProfile(data));
    });
  }
}

export const login = (data) => {
  return (dispatch) => {
    AuthMeAPI.login(data)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuth());
        } else{
          let message = response.data.messages.length > 0 ? response.data.messages[0] : "Error, please try again"
          dispatch(stopSubmit("login",{_error: message}))
        }
      })
  }
}
export const logout = () => {
  return (dispatch) => {
    AuthMeAPI.logout()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null,null,null, false));
        }
      })
  }
}

export default authReducer;