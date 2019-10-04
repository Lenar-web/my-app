const ADD_MESSAGE = 'ADD-MESSAGE';
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
  ]
};

const dialogReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE: 
    let newMessage ={name: "Ленар Евстафьев", message: action.newMessageText, id: 7, time: "Минуту назад", position: 'right'}
    return{
      ...state,
      messagesData: [...state.messagesData, newMessage],
      newMessageText: ''
    };
    default:
      return state
  }
}

export const addMessageAC = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogReducer;