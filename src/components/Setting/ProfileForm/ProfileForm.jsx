import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../Common/FromsControl/FromsControl';


let ProfileForm = ({submitSucceeded,handleSubmit, profile, error,invalid}) => {
  let message = null;
  if(error) {
    message = <div className="error-summary">{error}</div>
  } if(submitSucceeded) {
    message = <div className="form-success">Сохранено</div>
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>fullName</label>
      <Field name="fullName" component={Input} placeholder="Full Name"/>
    </div>
    <div>
      <label>About Me</label>
      <Field name="aboutMe" component={Textarea} placeholder="About Me"/>
    </div>
    <div>
      <label>lookingForAJob</label>
      <Field name="lookingForAJob" component={Input} type="checkbox"/>
    </div>
    <div>
      <label>lookingForAJobDescription</label>
      <Field name="lookingForAJobDescription" component={Textarea} placeholder="Looking for a job description"/>
    </div>
    <div>
      <h5>Contacts</h5>
        {Object.keys(profile.contacts).map( key => {
          return <div key={key}><label>{key}</label>
          <Field name={"contacts." + key} component={Input} placeholder={key}/></div>
        })}
    </div> 
    {message}
    {/* {invalid && <div className="error-summary">{error}</div>}
    {submitSucceeded && <div className="form-success">Сохранено</div>} */}
    <button className="btn btn-primary" type="submit">Submit</button>
  
  </form>
  )
}

export default reduxForm({
  form: 'profileUpload'
})(ProfileForm)