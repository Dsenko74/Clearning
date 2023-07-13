import {  useField } from 'formik';

const MyTextInput = ({children, label,...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field}/>
      {children}
      {meta.touched && meta.error && (<div className='error'>{meta.error}</div>)}
    </>
  )
}

export default MyTextInput;