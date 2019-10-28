import {AuthMeAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      };
      case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl
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
export const setCaptchaImage = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});

export const getAuth = () =>  async (dispatch) => {
    let data = await AuthMeAPI.me()
        if (data.resultCode === 0) {
          let {id, email, login} = data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
}

export const login = (data) => async (dispatch) => {
   let response = await AuthMeAPI.login(data)
        if (response.data.resultCode === 0) {
          dispatch(getAuth());
        } else {
           if (response.data.resultCode === 10) {

            dispatch(getCaptcha())
           
          } else {
          let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Error, please try again"
          dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const getCaptcha = () => async (dispatch) => {
  let response = await AuthMeAPI.captcha()
  let captchaUrl = response.data.url
      dispatch(setCaptchaImage(captchaUrl))
}
export const logout = () => async (dispatch) => {
   let response = await AuthMeAPI.logout()
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;