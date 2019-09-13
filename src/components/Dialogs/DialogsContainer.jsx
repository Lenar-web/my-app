import React from 'react';
import {updateNewMessageTextActionCreator, AddMessageActionCreator} from './../../redux/dialog-reducer'
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onAddMessage = () => {
    props.store.dispatch(AddMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  }

return (<Dialogs dialogsPage={state} 
                 onMessageChange={onMessageChange} 
                 onAddMessage={onAddMessage} />);
}

export default DialogsContainer;