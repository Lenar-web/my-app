import React from 'react';
import {updateNewMessageTextActionCreator, AddMessageActionCreator} from './../../redux/dialog-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';





let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  onAddMessage: () => {
    dispatch(AddMessageActionCreator());
  },
  onMessageChange: (text) => {
    dispatch(updateNewMessageTextActionCreator(text))
  }
 }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;