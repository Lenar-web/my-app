import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../Common/FromsControl/FromsControl';
import { required } from '../../../utils/validators/validators';

let Form = (props) => {
  debugger
  return <form onSubmit={props.handleSubmit}>
  <fieldset className="form-group">

    <Field className="form-control" name="email" validate={[required]} component={Input} type="email" placeholder="Ваш email"/>
  </fieldset>
  <fieldset className="form-group">
    <Field className="form-control" name="password" validate={[required]} component={Input} type="password" placeholder="Ваш пароль"/>
  </fieldset>
  <div class="rememberme-wrap">
  <Field id="rememberme" name="rememberMe" component={'input'} type="checkbox"/>
  <label htmlFor="rememberme">Запомнить меня</label>
  </div>
  {props.error &&
  <div className="error-summary">{props.error}</div>
}
<button className="btn-secondary">Войти</button>
</form>
}

const LoginReduxForm = reduxForm({form: 'login'})(Form)

export default LoginReduxForm