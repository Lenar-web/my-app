import React from 'react';
import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';

let News = (props) => {
let newsList = props.state.postData.map(n=> <Post author={n.author}  text={n.text} like={n.like} dislike={n.dislike} />);

  return (		
      <div>
        <CreatePost />
            {newsList}
      </div>
  );
}

export default News;