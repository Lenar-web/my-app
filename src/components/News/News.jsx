import React from 'react';
import CreatePostContainer from './CreatePost/CreatePostContainer';
import Post from './Post/Post';

let News = (props) => {

  let newsList = props.posts.map(n=> <Post author={n.author}  text={n.text} like={n.like} dislike={n.dislike} id={n.id} />);

  return (		
      <div>
        <CreatePostContainer store={props.store}/>
            {newsList}
      </div>
  );
}

export default News;