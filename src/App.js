
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftMenu from './components/LeftMenu/LeftMenu';
import{Route} from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Images from './components/Images/Images';
import Videos from './components/Videos/Videos';
import NewsContainer from './components/News/NewsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



let App = (props) => {
  return (
    <div>
      <Header />
      <div id="page-contents">
    	<div className="container">
    		<div className="row">
          <LeftMenu /> 
          <div className="col-md-9">
          <Route path='/news' render={ ()=> <NewsContainer /> }/>
          <Route path='/dialogs' render={ ()=> <DialogsContainer /> } />
          <Route path='/users' render={ ()=> <UsersContainer /> }/> 	
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
