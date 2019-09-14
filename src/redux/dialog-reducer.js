const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
  dialogsData: [
    {name: "Линда Лохан", message: "Привет! Ты как?", id: 1, time: "Минуту назад"},
    {name: "Юлия Кокс", message: "Я вижу", id: 2, time: "Час назад"},
    {name: "София Ли", message: "Привет! Ты как?", id: 3, time: "13 часов назад"},
    {name: "Джон Дои", message: "Привет! что нового", id: 4, time: "Вчера"},
    {name: "Анна Енг", message: "Ты тут?", id: 5, time: "2 дня назад"},
    {name: "Ричард Билл", message: "Я поеду сегодня", id: 6, time: "2 дня назад"}
  ],
  messagesData: [
    {name: "Линда Лохан", message: "Привет! Ты как?", id: 1, time: "3 дня назад", position: 'left'},
    {name: "Ленар Евстафьев", message: "Отлично", id: 2, time: "3 дня назад", position: 'right'},
    {name: "Ленар Евстафьев", message: "Отлично", id: 3, time: "3 дня назад", position: 'right'},
    {name: "Ленар Евстафьев", message: "Отлично", id: 4, time: "3 дня назад", position: 'right'},
    {name: "Линда Лохан", message: "Что делаешь?", id: 5, time: "30 минут назад", position: 'left'},
    {name: "Ленар Евстафьев", message: "Работаю", id: 6, time: "Минуту назад", position: 'right'}
  ],
  newMessageText: "Привет! Как дела?",
};

const dialogReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        name: "Ленар Евстафьев", 
        message: state.newMessageText, 
        id: 7, 
        time: "Минуту назад", 
        position: 'right'
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE_TEXT: 
    return {
      ...state,
      newMessageText: action.messageText
    };
  
    default:
      return state;
  }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});


export default dialogReducer;