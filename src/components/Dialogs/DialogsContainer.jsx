import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessageAC} from '../../redux/dialog-reducer';
import {compose} from 'redux';


let mapStateToProps =(state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps =(dispatch) => {
  return {
    onAddMessage: (newMessageText) => {
       dispatch(addMessageAC(newMessageText));
  }
  }
}
let DialogsContainer = compose(
  connect(mapStateToProps,mapDispatchToProps),
)(Dialogs);

export default DialogsContainer 