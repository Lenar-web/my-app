import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Form = (props) => {
  
  return <form onSubmit={props.handleSubmit}>
  <fieldset className="form-group">
    <Field className="form-control" name="email" component="input" type="email" placeholder="Ваш email"/>
  </fieldset>
  <fieldset className="form-group">
    <Field className="form-control" name="password" component="input" type="password" placeholder="Ваш пароль"/>
  </fieldset>
  <Field name="rememberMe" component="input" type="checkbox"/>
  <label htmlFor="">Запомнить меня</label>
<button className="btn-secondary">Войти</button>
</form>
}

const LoginReduxForm = reduxForm({form: 'login'})(Form)

export default LoginReduxForm