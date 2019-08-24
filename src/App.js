import React from 'react';
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/ionicons.min.css";
import "./css/font-awesome.min.css";
import "./css/emoji.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftMenu from './components/LeftMenu/LeftMenu';
import News from './components/News/News';
import Dialogs from './components/Dialogs/Dialogs';
import{BrowserRouter, Route} from 'react-router-dom'
import People from './components/People/People';
import Friends from './components/Friends/Friends';
import Images from './components/Images/Images';
import Videos from './components/Videos/Videos';

let App = (props) => {

  return (
    <BrowserRouter>

    <div>
      <Header />
      <div id="page-contents">
    	<div className="container">
    		<div className="row">
          <LeftMenu /> 
          <div className="col-md-9">
          <Route path='/news' render={ ()=> <News state={props.state.newsPage}/> }/>
          <Route path='/dialogs' render={ ()=> <Dialogs state={props.state.dialogsPage}/> } />
          <Route path='/people' component={People}/> 	
          <Route path='/friends' component={Friends}/>
          <Route path='/images' component={Images}/>
          <Route path='/videos' component={Videos}/> 	 		
          </div>
    		</div>
    	</div>
    </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
