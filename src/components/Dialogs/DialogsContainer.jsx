import React from 'react';
import {updateNewMessageTextActionCreator, AddMessageActionCreator} from './../../redux/dialog-reducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';




const DialogsContainer = (props) => {

    return (
    <StoreContext.Consumer>  
      { 
        (store) => {
          
          let state = store.getState().dialogsPage;

          let onAddMessage = () => {
                 store.dispatch(AddMessageActionCreator());
               }             
               let onMessageChange = (text) => {
                 store.dispatch(updateNewMessageTextActionCreator(text))
               }
               
       return <Dialogs dialogsPage={state} 
                       onMessageChange={onMessageChange} 
                       onAddMessage={onAddMessage} />
                    }
        }
    </StoreContext.Consumer>
           )
}

export default DialogsContainer;