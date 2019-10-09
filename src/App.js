
import React from 'react';
import Footer from './components/Footer/Footer';
import LeftMenu from './components/LeftMenu/LeftMenu';
import{Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/ProfilePage/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/Common/Preloader/Preloader';
import {Redirect} from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }
  

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }
 
  return (
    <div>
      {!this.props.isAuth &&
    <Redirect  to="/login"/>
  }
      <HeaderContainer />
      <div id="page-contents">
  <div className="container">
    <div className="row">
    {this.props.isAuth && <LeftMenu />}
       
      <div className="col-md-9">
      <Route path='/profile/:userId?' render={ ()=> <ProfileContainer /> }/>
      <Route path='/dialogs' render={ ()=> <DialogsContainer /> } />
      <Route path='/users' render={ ()=> <UsersContainer /> }/> 	
      <Route path='/login' render={ ()=> <Login /> }/>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </div>
  );
  }
}

let mapStateToProps =(state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
}) 
export default connect(mapStateToProps, {initializeApp})(App);
