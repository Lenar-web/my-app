const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    {author: "Ленар Евстафьев", text: "Всем привет", like: 10, dislike: 0, id: 1},
    {author: "Ленар Евстафьев", text: "Как дела?", like: 100, dislike: 14, id: 2},
    {author: "Ленар Евстафьев", text: "Сегодня прекрасный день", like: 34, dislike: 0, id: 3},
  ],
  newPostText: "Привет! Как дела?",
  }
const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        author: "Ленар Евстафьев",
        text: state.newPostText,
        like: 0,
        dislike: 0,
        id: 4  
      }
      return{
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT: 
    return {
      ...state,
      newPostText: action.newText
    };
    
    default:
      return state;
  }
}

export const AddPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default postReducer;