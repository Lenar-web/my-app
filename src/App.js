
import React from 'react';
import Footer from './components/Footer/Footer';
import LeftMenu from './components/LeftMenu/LeftMenu';
import{Route} from 'react-router-dom';
import Images from './components/Images/Images';
import Videos from './components/Videos/Videos';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/ProfilePage/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



let App = (props) => {
  return (
    <div>
      <HeaderContainer />
      <div id="page-contents">
  <div className="container">
    <div className="row">
    
      <LeftMenu /> 
      <div className="col-md-9">
      <Route path='/profile/:userId?' render={ ()=> <ProfileContainer /> }/>
      <Route path='/dialogs' render={ ()=> <DialogsContainer /> } />
      <Route path='/users' render={ ()=> <UsersContainer /> }/> 	
      <Route path='/images' component={Images}/>
      <Route path='/videos' component={Videos}/> 
      <Route path='/login' render={ ()=> <Login /> }/>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </div>
  );
}

export default App;
