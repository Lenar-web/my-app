import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../Common/FromsControl/FromsControl';
import { required } from '../../../utils/validators/validators';

let Form = (props) => {
  return <form onSubmit={props.handleSubmit}>
  <fieldset className="form-group">

    <Field className="form-control" name="email" validate={[required]} component={Input} type="email" placeholder="Ваш email"/>
  </fieldset>
  <fieldset className="form-group">
    <Field className="form-control" name="password" validate={[required]} component={Input} type="password" placeholder="Ваш пароль"/>
  </fieldset>
  <div className="rememberme-wrap">
  <Field id="rememberme" name="rememberMe" component={'input'} type="checkbox"/>
  <label htmlFor="rememberme">Запомнить меня</label>
  </div>
  {props.captchaUrl &&
  <div>
    <img className="captcha-image" src={props.captchaUrl} alt="Capthca"/>
    <Field className="form-control" name="captcha" component={Input} validate={[required]} type="text" placeholder="Код с картинки"/>
  </div>
  }
  {props.error &&
  <div className="error-summary">{props.error}</div>
}
<button className="btn-secondary">Войти</button>
</form>
}

const LoginReduxForm = reduxForm({form: 'login'})(Form)

export default LoginReduxForm