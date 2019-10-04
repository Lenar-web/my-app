import React from 'react';
import LoginReduxForm from './Form/Form';
import FormContainer from './Form/FormContainer';
let Login = (props) => {

  return <div className="sign-up-form">
        <a href="index.html" className="logo"><img src="images/logo.png" alt="Friend Finder"/></a>
        <h2 className="text-white">Войти</h2>
        <div className="line-divider"></div>
        <div className="form-wrapper">
          <FormContainer/>
        </div>
        <a href="#c">Already have an account?</a>
        <img className="form-shadow" src="images/bottom-shadow.png" alt="" />
      </div>

}

export default Login