import React from 'react';
import News from './News';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.newsPage.postData
  }
}

const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;