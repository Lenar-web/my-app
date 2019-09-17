import './index.css';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/ionicons.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/emoji.css";
// import "./assets/js/jquery-3.1.1.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/masonry.pkgd.min.js";
// import "./assets/js/jquery.sticky-kit.min.js";
// import "./assets/js/jquery.scrollbar.min.js";
// import "./assets/js/jquery.appear.min.js";
// import "./assets/js/jquery.incremental-counter.js";
// import "./assets/js/script.js";
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
