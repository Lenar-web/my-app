import React from 'react';

const FormControl = ({input, meta: {touched, error},children, ...props}) => {
  let hasError = touched && error;
  return(
    <div className={hasError ? 'formControl error' : 'formControl'}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  )
}

export let Textarea = (props) => {
  const {input,meta, child, ...restProps} = props
  return(<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
}
export let Input = (props) => {
  const {input,meta, child, ...restProps} = props
  return(<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
}