const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let store = {
  _callSubscriber() {},
  _state: {
    dialogsPage: {
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
      newMessageText: ""
    },
    newsPage: {
      postData: [
        {author: "Ленар Евстафьев", text: "Всем привет", like: 10, dislike: 0, id: 1},
        {author: "Ленар Евстафьев", text: "Как дела?", like: 100, dislike: 14, id: 2},
        {author: "Ленар Евстафьев", text: "Сегодня прекрасный день", like: 34, dislike: 0, id: 3},
      ],
      newPostText: "",
      },
  
    friendsData: [
      {name: "София Ли", status: "Студент Гарварда"},
      {name: "Джон до", status: "Путешествинник"},
      {name: "Юлия Кокс", status: "Арт Дизайнер"},
      {name: "Роберт Кук", status: "Фотограф"},
      {name: "Ричард Белл", status: "Графический дизайнер"},
      {name: "Линда Лохан", status: "Инженер"},
      {name: "Анна Ёнг", status: "Музыкант"},
      {name: "Джеймс Картер", status: "Сео специалист"},
      {name: "Алексис Кларк", status: "Путешественник"},
    ]
  },
  getState() {
    return this._state;
  },

  dispatch(action){
    if(action.type === ADD_POST) {
      let newPost = {
        author: "Ленар Евстафьев",
        text: this._state.newsPage.newPostText,
        like: 0,
        dislike: 0,
        id: 4
      }
    this._state.newsPage.postData.push(newPost);
    this._state.newsPage.newPostText = '';
    this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
      this._state.newsPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }else if(action.type === ADD_MESSAGE) {
      let newMessage = {
        name: "Ленар Евстафьев", 
        message: this._state.dialogsPage.newMessageText, 
        id: 7, 
        time: "Минуту назад", 
        position: 'right'
      }
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.messageText;
      this._callSubscriber(this._state);
    }
    
  },
 subscribe(observer) {
  this._callSubscriber = observer;
}
};
export const AddPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;
window.store = store;