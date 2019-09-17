import {createStore, combineReducers} from "redux";
import dialogReducer from "./dialog-reducer";
import postReducer from "./post-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
  newsPage: postReducer, 
  dialogsPage: dialogReducer,
  usersPage: userReducer
});

let store = createStore(reducers);

export default store;