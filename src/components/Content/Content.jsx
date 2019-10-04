import React from 'react';
import{Route} from 'react-router-dom';
import LeftMenu from '../LeftMenu/LeftMenu';
import ProfileContainer from '../ProfilePage/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import Images from '../Images/Images';
import Videos from '../Videos/Videos';

let Content = (props) => {
  return <div id="page-contents">
  <div className="container">
    <div className="row">
    
      <LeftMenu /> 
      <div className="col-md-9">
      <Route path='/profile/:userId?' render={ ()=> <ProfileContainer /> }/>
      <Route path='/dialogs' render={ ()=> <DialogsContainer /> } />
      <Route path='/users' render={ ()=> <UsersContainer /> }/> 	
      <Route path='/images' component={Images}/>
      <Route path='/videos' component={Videos}/> 
      </div>
    </div>
  </div>
</div>
}
export default Content