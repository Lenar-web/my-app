import { profileAPI } from "../api/api";
import {stopSubmit} from 'redux-form';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_MY_PROFILE = "SET-MYPROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO = "SAVE-PHOTO";

let initialState = {
  profile: null,
  myProfile: null,
  status: "",
  postData: [
    {author: "Ленар Евстафьев", text: "Всем привет", like: 10, dislike: 0, id: 1},
    {author: "Ленар Евстафьев", text: "Как дела?", like: 100, dislike: 14, id: 2},
    {author: "Ленар Евстафьев", text: "Сегодня прекрасный день", like: 34, dislike: 0, id: 3},
  ],
  newPostText: "Привет! Как дела?",
  }
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        author: "Ленар Евстафьев",
        text: action.newPostText,
        like: 0,
        dislike: 0,
        id: 4  
      }
      return{
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      };
    case SET_USER_PROFILE: 
    return {
      ...state,
      profile: action.profile
    };
    case SET_MY_PROFILE: 
    return {
      ...state,
      myProfile: action.myProfile
    };
    case SET_STATUS: 
    return {
      ...state,
      status: action.status
    };
    case SAVE_PHOTO: 
    return {
      ...state,
      myProfile: {...state.myProfile, photos: action.photos}
    };
    default:
      return state;
  }
}

export const addPost = (newPostText) => ({type: ADD_POST,newPostText});
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setMyProfile = (myProfile) => ({type: SET_MY_PROFILE, myProfile});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});

const ProfileRequest = async (userId,dispatch, actionCreator) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(actionCreator(data));
}
export const getProfile = (userId) => async (dispatch) => {
  ProfileRequest(userId, dispatch, setUsersProfile);
  }
export const getMyProfile = (userId) => async (dispatch) => {
  ProfileRequest(userId, dispatch, setMyProfile);
}



  export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }

 export const updateStatus = (status) => async (dispatch) => {
      let response = await profileAPI.updateStatus(status);
          if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
          }
      }  
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.updatePhoto(file);
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }     
  }
  export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
          dispatch(getMyProfile(userId));
        } else {
         dispatch(stopSubmit("profileUpload", {_error: response.data.messages[0] }))
        //  return Promise.reject(response.data.messages[0]);
        }
    }    
export default profileReducer;