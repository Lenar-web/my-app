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
import{Route} from 'react-router-dom';
import People from './components/People/People';
import Friends from './components/Friends/Friends';
import Images from './components/Images/Images';
import Videos from './components/Videos/Videos';
import NewsContainer from './components/News/NewsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';


let App = (props) => {
  return (
    <div>
      <Header />
      <div id="page-contents">
    	<div className="container">
    		<div className="row">
          <LeftMenu /> 
          <div className="col-md-9">
          <Route path='/news' render={ ()=> <NewsContainer store={props.store}/> }/>
          <Route path='/dialogs' render={ ()=> <DialogsContainer store={props.store} /> } />
          <Route path='/people' component={People}/> 	
          <Route path='/friends' render={ ()=> <Friends state={props.state.friendsData} /> }/>
          <Route path='/images' component={Images}/>
          <Route path='/videos' component={Videos}/> 	 		
          </div>
    		</div>
    	</div>
    </div>
      <Footer />
    </div>
  );
}

export default App;
