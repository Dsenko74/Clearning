import {  useField } from 'formik';

const MyTextInput = ({children, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} {...field}/>
      {children}
      {meta.touched && meta.error && (<div className='error'>{meta.error}</div>)}
    </>
  )
}

export default MyTextInput;