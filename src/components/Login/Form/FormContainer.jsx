import React from 'react';
import LoginReduxForm from './Form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {login,getCaptcha} from '../../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

let FormContainer = (props) => {


  
  let onSubmit = (formData) => {
    props.login(formData)
  }
if(props.isAuth){
  return <Redirect to={"/profile"} />
}
  return (
    <LoginReduxForm onSubmit={onSubmit} {...props} />
  )

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
 })

 export default compose(
  connect(mapStateToProps, {login, getCaptcha})
)(FormContainer);