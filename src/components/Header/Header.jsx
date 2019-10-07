import React from 'react';
import headerLogo from './../../assets/images/logo.png'
import {NavLink} from 'react-router-dom';

let Header = (props) => {
  return (

      	<header id="header">
      <nav className="navbar navbar-default navbar-fixed-top menu">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html"><img src={headerLogo} alt="logo" /></a>
          </div>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
              {props.isAuth 
              ? <ul className="nav navbar-nav navbar-right main-menu"><li className="dropdown"><NavLink to="/profile">{props.login}</NavLink></li><li className="dropdown"><button className="logout-button" onClick={props.logout}>Выход</button></li></ul>
              : <ul className="nav navbar-nav navbar-right main-menu"><li className="dropdown"><NavLink to="/login">Вход</NavLink></li></ul>}
            
            <form className="navbar-form navbar-right hidden-sm">
              <div className="form-group">
                <i className="icon ion-android-search"></i>
                <input type="text" className="form-control" placeholder="Search friends, photos, videos" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>

  );
}

export default Header;