import React from 'react';
import News from './News';


let NewsContainer = (props) => {

  let state = props.store.getState().newsPage;


  return (<News store={props.store} posts={state.postData}/>
  );
}

export default NewsContainer;