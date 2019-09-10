import {createStore, combineReducers} from "redux";
import dialogReducer from "./dialog-reducer";
import postReducer from "./post-reducer";

let reducers = combineReducers({
  newsPage: postReducer, 
  dialogsPage: dialogReducer
});

let store = createStore(reducers);

export default store;