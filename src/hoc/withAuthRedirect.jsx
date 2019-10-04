import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const widthAuthRedirect = (Component) => {

  let RedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to={"/login"} />
    return(<Component {...props} />)
  }

  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectAuthRedirectComponent
}