import React from 'react';


export let Textarea = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return(
    <div className={hasError ? 'formControl error' : 'formControl'}>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
export let Input = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return(
    <div className={hasError ? 'formControl error' : 'formControl'}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}