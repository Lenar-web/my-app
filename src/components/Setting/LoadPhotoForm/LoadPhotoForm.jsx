import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
}) => {
  debugger
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    multiple/>
  );
};

let PhotoForm = (props) => {
const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Attachment</label>
      <Field name="attachment" component={FileInput} type="file" />
    </div>
    <button type="submit">Submit</button>
  </form>

  )
}

export default reduxForm({
  form: 'fileupload'
})(PhotoForm)