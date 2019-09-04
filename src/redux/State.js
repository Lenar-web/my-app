let rerenderEntireTree = () => {

}
let state = {
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
    ]
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
}

export let addPost = () => {
  let newPost = {
    author: "Ленар Евстафьев",
    text: state.newsPage.newPostText,
    like: 0,
    dislike: 0,
    id: 4
  }
state.newsPage.postData.push(newPost);
state.newsPage.newPostText = '';
rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
   state.newsPage.newPostText = newText;
   rerenderEntireTree(state);
}
export let subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;