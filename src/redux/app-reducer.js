import { getAuth } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
  initialized: false
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispacth) => {
  let promised = dispacth(getAuth());
  Promise.all([promised]).then( () =>{
    dispacth(initializedSuccess())
  })
  
}

export default appReducer;