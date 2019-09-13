import React from 'react';
import News from './News';
import StoreContext from '../../StoreContext';


let NewsContainer = (props) => {

  return <StoreContext.Consumer>  
  { (store) => {
   let state = store.getState().newsPage;
   
   return <News posts={state.postData}/>
     }
    }
  </StoreContext.Consumer>
  
}

export default NewsContainer;