import { AuthMeAPI, profileAPI  } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_MY_PROFILE = "SET-MY-PROFILE";
const SET_MY_ID = "SET-MY-ID";
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  myProfile: null,
  }
const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: 
      return{
        ...state,
        ...action.data,
        isAuth: true
      };
      case SET_MY_PROFILE: 
    return {
      ...state,
      myProfile: action.profile
    };
    case SET_MY_ID:
      return{
        ...state,
        id: action.id
      };
    default:
      return state;
  }
}

export const setAuthUserData = (id, email,login) => ({type: SET_USER_DATA, data: {id,email,login}});
export const setMyId = (id) => ({type: SET_MY_ID, id});
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile});

export const getAuth = () =>{
  return (dispatch) => {
    AuthMeAPI.me()
    .then(data => {
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
      });
    }
  }
  export const getMyProfile = (userId) =>{
    return (dispatch) => {
      profileAPI.getProfile(userId).then(data=> {
        dispatch(setMyProfile(data));
      });
      }
    }

 export const login = (data) => {
   return (dispatch) => {
    AuthMeAPI.login(data)
    .then(response => {
 if(response.data.resultCode === 0) {
        dispatch(setMyId(response.data.data.userId));
      }
    })
   }
 
 }

export default authReducer;