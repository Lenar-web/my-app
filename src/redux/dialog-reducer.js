const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogReducer = (state, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        name: "Ленар Евстафьев", 
        message: state.newMessageText, 
        id: 7, 
        time: "Минуту назад", 
        position: 'right'
      }
      state.messagesData.push(newMessage);
      state.newMessageText = '';
    return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
    return state;

    default:
      return state;
  }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});


export default dialogReducer;