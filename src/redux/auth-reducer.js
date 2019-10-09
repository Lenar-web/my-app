import {AuthMeAPI, profileAPI} from "../api/api";
import {stopSubmit} from 'redux-form';
import { async } from "q";

const SET_USER_DATA = "SET-USER-DATA";
const SET_MY_PROFILE = "SET-MY-PROFILE";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  myProfile: null
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

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    id,
    email,
    login,
    isAuth
  }
});
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile});

export const getAuth = () =>  async (dispatch) => {
    let data = await AuthMeAPI.me()
        if (data.resultCode === 0) {
          let {id, email, login} = data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
}

export const getMyProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
        dispatch(setMyProfile(data));
}

export const login = (data) => async (dispatch) => {
   let response = await AuthMeAPI.login(data)
        if (response.data.resultCode === 0) {
          dispatch(getAuth());
        } else {
          let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Error, please try again"
          dispatch(stopSubmit("login", {_error: message}))
        }
}
export const logout = () => async (dispatch) => {
   let response = await AuthMeAPI.logout()
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;