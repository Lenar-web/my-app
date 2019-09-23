import {createStore, combineReducers} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
  profilePage: profileReducer, 
  dialogsPage: dialogReducer,
  usersPage: userReducer
});

let store = createStore(reducers);

window.store = store;

export default store;