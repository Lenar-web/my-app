import * as axios from 'axios';
import Login from '../components/Login/LoginContainer';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY" : '6a5736af-0417-418e-b9bb-87da189b1883'
  } 
})


export const usersAPI = {
  getUser(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data
    })
  },
  follow(iserId) {
    return instance.post(`follow/${iserId}`)
    .then(response => {
      return response.data.resultCode
    })
  },
  unfollow(iserId) {
    return instance.delete(`follow/${iserId}`)
    .then(response => {
      return response.data.resultCode
    })
  } 
}

export const profileAPI = {
  getProfile(userId){
    return instance.get(`profile/${userId}`)
    .then(response => {
      return response.data
    })
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`, {status: status})
  }  
}

export const AuthMeAPI = {
  me(){
    return instance.get('auth/me').then(response => {
      return response.data
    })
  },
  login(data) {
    return instance.post('auth/login', data)
  }
}